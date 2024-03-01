import { Suspense, useState, useEffect, useContext } from 'react';
import { CartContext, FavoritesContext } from '../../components/Layout';
import { Outlet, useParams, Link, NavLink } from 'react-router-dom';
import { PageTitle } from '../../components/pageTitle/PageTitle';
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
import { toggleLocalStorage } from '../../utils/toggleLocalStorage';
import { addToCart } from '../../utils/addToCart';
import { getBanner } from '../../utils/getBanner';
import { Good } from '../../../@types/custom';

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
        setIsFavorite(favoriteArray.includes(data.id));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getGoodDetail();
  }, [goodId]);

  let favoriteArray: number[] = [];

  if (localStorage.getItem('favorite')) {
    favoriteArray = JSON.parse(localStorage.getItem('favorite') as string);
  } else {
    localStorage.setItem('favorite', JSON.stringify(favoriteArray));
  }

  const isInFavorite: boolean = favoriteArray.includes(good?.id);
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
    toggleLocalStorage(isFavorite, 'favorite', good.id);
    setIsFavorite((prev) => !prev);
    setAmountInFavorites((amountInFavorites: number) =>
      isFavorite ? amountInFavorites - 1 : amountInFavorites + 1,
    );
  }

  function toggleCart() {
    const isNeedAddNewToCart = addToCart(amount, good.id, 'add');

    isNeedAddNewToCart &&
      setAmountInCart((amountInCart: number) => amountInCart + 1);
  }

  return (
    good && (
      <>
        {isLoading && <Loader />}
        <PageTitle>{good.name}</PageTitle>
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
                  id={good.id}
                  quantity={amount}
                  setQuantity={() => {
                    return;
                  }}
                />
                <AddToCartBtn
                  type="button"
                  onClick={() => toggleCart()}
                  className="secondaryBtn"
                >
                  Додати до кошика
                </AddToCartBtn>
                <AddToFavoriteBtn
                  type="button"
                  style={{
                    backgroundColor: isFavorite ? '#2D3F24' : 'transparent',
                  }}
                  onClick={() => toggleFavorite()}
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
                <Link to={'/cart'} className="primaryBtn">
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
            <Outlet />
          </Suspense>
        </ContainerLimiter>
      </>
    )
  );
};

export default GoodDetail;
