import { Suspense, useState, useEffect, useContext } from 'react';
import { CartContext, FavoritesContext } from '../../components/Layout';
import {
  Outlet,
  useParams,
  Link,
  NavLink,
  useOutletContext,
} from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import { ContainerLimiter } from '../../components/containerLimiter/ContainerLimiter';
import { Increment } from '../../components/Increment/Increment';
import {
  SectionInfo,
  SellDiv,
  Price,
  Material,
  AddToCartBtn,
  AddToFavoriteBtn,
  AdditionalNavigation,
} from './GoodDetail.styled';
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

  const { setAmountInCart } = useContext(CartContext);
  const { setAmountInFavorites } = useContext(FavoritesContext);

  const [good, setGood] = useState<Good>({} as Good);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getGoodDetail() {
      try {
        setIsLoading(true);
        const data = await fetchItemDetails(goodId);
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
        <ContainerLimiter paddingTopMob={'56px'} paddingTopDesc={'56px'}>
          <SectionInfo>
            <Slider
              arrayToRender={arrayToRender}
              sliderHandler={sliderHandler}
              description={good.name}
            ></Slider>
            <SellDiv>
              <h3>{good.name}</h3>
              <Price>₴ {good.price}</Price>
              <p>
                <span>Наявність в магазині: </span>
                {good.stock === 'IN_STOCK' ? 'так' : getBanner(good.stock)}
              </p>
              <Material>{good.mini_description}</Material>
              <div>
                <Increment
                  increment={increment}
                  good={good}
                  quantity={amount}
                  setQuantity={() => {
                    return;
                  }}
                />
                <AddToCartBtn
                  type="button"
                  onClick={() => toggleCart()}
                  className="secondaryBtn"
                  title="Add to the cart"
                >
                  Додати до кошика
                </AddToCartBtn>
                <AddToFavoriteBtn
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
                </AddToFavoriteBtn>
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
            </SellDiv>
          </SectionInfo>

          <AdditionalNavigation>
            <li>
              <NavLink to="description">Опис &nbsp; /</NavLink>
            </li>
            <li>
              <NavLink to="additional">Додаткова інформація &nbsp; /</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Відгуки</NavLink>
            </li>
          </AdditionalNavigation>

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
