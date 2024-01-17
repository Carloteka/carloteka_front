import { useState, useContext } from 'react';
import { CartContext } from '../Layout';
import { Link } from 'react-router-dom';
import {
  ThumbPhoto,
  Button,
  Div,
  FlexContainer,
  Star,
} from './CatalogCard.styled';
import sprite from '../../images/sprite.svg';
import { toggleLocalStorage } from '../../utils/toggleLocalStorage';
import { toggleCartInLocalStorage } from '../../utils/toggleCartInLocalStorage';
import { getBanner } from '../../utils/getBanner';

type Popular = {
  mini_image: string;
  name: string;
  price: number;
  id_name: string;
  in_stock: number;
  id: string;
  category__id_name: string;
};

interface SliderItemProps {
  item: Popular;
}

export const CatalogCard = ({ item }: SliderItemProps) => {
  const { id_name, name, mini_image, price, in_stock, id, category__id_name } =
    item;

  const { setAmountInCart } = useContext(CartContext);

  let cartArray: { id: string; amount: number }[] = [];
  let favoriteArray: string[] = [];

  if (localStorage.getItem('cart')) {
    cartArray = JSON.parse(localStorage.getItem('cart') as string);
  } else {
    localStorage.setItem('cart', JSON.stringify(cartArray));
  }

  if (localStorage.getItem('favorite')) {
    favoriteArray = JSON.parse(localStorage.getItem('favorite') as string);
  } else {
    localStorage.setItem('favorite', JSON.stringify(favoriteArray));
  }

  const isInCart: boolean = cartArray.some((el) => el.id === id_name);
  const isInFavorite: boolean = favoriteArray.includes(id_name);
  const [inCart, setInCart] = useState(isInCart);
  const [isFavorite, setIsFavorite] = useState(isInFavorite);

  function toggleCart() {
    toggleCartInLocalStorage(inCart, id_name);
    setInCart((prev) => !prev);
    setAmountInCart((amountInCart: number) =>
      isInCart ? amountInCart - 1 : amountInCart + 1,
    );
  }
  function toggleFavorite() {
    toggleLocalStorage(isFavorite, 'favorite', id_name);
    setIsFavorite((prev) => !prev);
  }

  return (
    <>
      <ThumbPhoto>
        <div>
          <Button
            type="button"
            style={{ backgroundColor: inCart ? '#2D3F24' : 'white' }}
            onClick={() => toggleCart()}
            disabled={in_stock === 0}
          >
            <svg>
              <use href={`${sprite}#cart`} />
            </svg>
          </Button>
          <Button
            type="button"
            style={{ backgroundColor: isFavorite ? '#2D3F24' : 'white' }}
            onClick={() => toggleFavorite()}
          >
            <svg style={{ fill: isFavorite ? 'white' : '#101010' }}>
              <use href={`${sprite}#favorite`} />
            </svg>
          </Button>
        </div>
        {!(in_stock === 1) && (
          <p
            style={{
              borderTop: in_stock === 2 ? '0.5px solid white' : '',
              textTransform: 'capitalize',
              backgroundColor:
                in_stock === 2
                  ? '#2D3F24'
                  : in_stock === 3
                  ? '#2864BE'
                  : '#b4a525',
            }}
          >
            {getBanner(in_stock)}
          </p>
        )}
        <Link to={`/${category__id_name}/${id}/description`} state={{ id }}>
          <img
            src={
              import.meta.env.PROD
                ? `http://carloteka.com/${mini_image}`
                : `http://localhost:8000/${mini_image}`
            }
            alt="img першої категорії"
            width={304}
            height={304}
            style={{
              opacity: in_stock === 0 || in_stock === 3 ? '0.5' : '',
              backgroundColor:
                in_stock === 0 || in_stock === 3 ? '#F2F0EC' : '',
            }}
            loading="lazy"
          />
        </Link>
      </ThumbPhoto>
      <h4>{name}</h4>
      <Div>
        <FlexContainer>
          <ul>
            {[0, 1, 2, 3, 4].map((index) => (
              <li key={index}>
                <Star style={{ fill: index <= 3 ? '#5B5B59' : 'transparent' }}>
                  <use href={`${sprite}#star`} />
                </Star>
              </li>
            ))}
          </ul>
          8
        </FlexContainer>
        <p>₴ {price}</p>
      </Div>
    </>
  );
};
