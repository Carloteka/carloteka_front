import css from './GoodDetail.module.scss';
import { Suspense, useState, useEffect, useContext } from 'react';
import { CartContext, FavoritesContext } from '../../components/Layout';
import {
  Outlet,
  useParams,
  Link,
  NavLink,
  useOutletContext,
  useNavigate,
} from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import { ContainerLimiter } from '../../components/containerLimiter/ContainerLimiter';
import { Increment } from '../../components/Increment/Increment';
import { Slider } from '../../components/category-card/slider/Slider';
import sprite from '../../images/sprite.svg';
import { fetchItemDetails } from '../../api/api';
import {
  addToCart,
  getBanner,
  toggleLocalStorage,
  checkLocalStorage,
} from '../../utils';
import { Good } from '../../../@types/custom';

type ContextType = { good: Good | null };
type Image = { image: string };

const GoodDetail = () => {
  const { goodId } = useParams();

  const navigate = useNavigate();

  const { setAmountInCart } = useContext(CartContext);
  const { setAmountInFavorites } = useContext(FavoritesContext);

  const [good, setGood] = useState<Good>({} as Good);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getGoodDetail() {
      try {
        setIsLoading(true);
        const data = await fetchItemDetails(goodId);

        if (!data) {
          navigate('/');
          return;
        }
        setArray(data.image_set);
        setGood(data);
        setIsFavorite(favoriteArray.some((el) => el.id === data.id));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getGoodDetail();
  }, [goodId]);

  const favoriteArray: { id: number }[] = checkLocalStorage('favorite', []);

  const isInFavorite: boolean = favoriteArray.some((el) => el.id === good?.id);
  const [isFavorite, setIsFavorite] = useState(isInFavorite);

  const [amount, setAmount] = useState(1);

  const [array, setArray] = useState<Image[]>(good?.image_set || []);
  //   console.log(array);

  const width: number = 1;

  const arrayToRender: Image[] = array.slice(0, width);

  function sliderHandler(payload: number) {
    if (array.length <= width) {
      return;
    }
    const newArray = [...array];

    if (payload === -1) {
      const lastEl: Image = newArray.pop() as Image;
      newArray.unshift(lastEl);
    }

    if (payload === 1) {
      const firstEl: Image = newArray.shift() as Image;

      newArray.push(firstEl);
    }

    setArray(newArray);
  }

  function increment(amount: number) {
    setAmount(amount);
  }

  function toggleFavorite() {
    toggleLocalStorage(isFavorite, 'favorite', { id: good.id });
    setIsFavorite((prev) => !prev);
    setAmountInFavorites((amountInFavorites: number) =>
      isFavorite ? amountInFavorites - 1 : amountInFavorites + 1,
    );
  }

  function toggleCart() {
    const isNeedAddNewToCart = addToCart(amount, good, 'add');

    isNeedAddNewToCart &&
      setAmountInCart((amountInCart: number) => amountInCart + 1);
  }

  return (
    good && (
      <>
        {isLoading && <Loader />}
        <ContainerLimiter>
          <section className={css.info}>
            <Slider
              arrayToRender={arrayToRender}
              sliderHandler={sliderHandler}
              description={good.name}
            ></Slider>
            <div className={css.sellBox}>
              <h3>{good.name}</h3>
              <p className={css.price}>₴ {good.price}</p>
              <p>
                <span>Наявність в магазині: </span>
                {good.stock === 'IN_STOCK' ? 'так' : getBanner(good.stock)}
              </p>
              <p className={css.material}>{good.mini_description}</p>
              <div>
                <Increment
                  increment={increment}
                  good={good}
                  quantity={amount}
                  setQuantity={() => {
                    return;
                  }}
                />
                <button
                  type="button"
                  onClick={() => toggleCart()}
                  className={`${css.addToCartBtn} secondaryBtn`}
                  title="Add to the cart"
                >
                  Додати до кошика
                </button>
                <button
                  className={css.addToFavoriteBtn}
                  type="button"
                  style={{
                    backgroundColor: isFavorite ? '#2D3F24' : 'transparent',
                  }}
                  onClick={() => toggleFavorite()}
                  title="Add to favorites"
                >
                  <svg
                    width={24}
                    height={24}
                    style={{
                      fill: isFavorite ? 'white' : '#101010',
                    }}
                  >
                    <use href={`${sprite}#favorite`} />
                  </svg>
                </button>
                <Link
                  to={'/delivery'}
                  className="primaryBtn"
                  onClick={() => toggleCart()}
                >
                  Купити в один клік
                </Link>
              </div>
              <p>
                <span>Категорія: </span>
                {good.category?.name}
              </p>
            </div>
          </section>

          <ul className={css.additionalNav}>
            <li>
              <NavLink to="description">Опис &nbsp; /</NavLink>
            </li>
            <li>
              <NavLink to="additional">Додаткова інформація &nbsp; /</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Відгуки</NavLink>
            </li>
          </ul>

          <Suspense fallback={<Loader />}>
            <Outlet context={{ good }} />
          </Suspense>
        </ContainerLimiter>
      </>
    )
  );
};

export function useGood() {
  return useOutletContext<ContextType>();
}
export default GoodDetail;
