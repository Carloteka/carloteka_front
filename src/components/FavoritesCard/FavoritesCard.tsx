import { useContext } from 'react';
import { CartContext } from '../Layout';
import {
  FlexContainer,
  Img,
  Name,
  Div,
  Price,
  Star,
  BuyBtnDesc,
  DelBtn,
  BuyBtn,
} from './FavoritesCard.styled';
import sprite from '../../images/sprite.svg';
import { toggleCartInLocalStorage } from '../../utils/toggleCartInLocalStorage';
import { Good } from '../../../@types/custom';

interface FavoritesCardProps {
  good: Good;
  onClickDelete: (id: number) => void;
}

export const FavoritesCard = ({ good, onClickDelete }: FavoritesCardProps) => {
  const { image_set, name, price, id, stars } = good;

  const { setAmountInCart } = useContext(CartContext);
  // const [quantity, setQuantity] = useState(1);

  function buyBtnHandle() {
    toggleCartInLocalStorage(false, id);
    setAmountInCart((amountInCart: number) => amountInCart + 1);
  }

  // useEffect(() => {
  //   if (location.pathname.includes('cart')) {
  //     if (!localStorage.getItem('cart')) {
  //       localStorage.setItem('cart', JSON.stringify([]));
  //     }

  //     const newArray = JSON.parse(localStorage.getItem('cart') as string);

  //     const temp = newArray.find(
  //       (el: { id: string }) => el.id === good.id_name,
  //     );

  //     setQuantity(temp.amount);
  //   }
  // }, [quantity]);

  return (
    <>
      <Img
        src={
          import.meta.env.PROD
            ? `http://carloteka.com/${image_set[0].image}`
            : `http://localhost:8000/${image_set[0].image}`
        }
        width={60}
        height={82}
        alt={name}
        loading="lazy"
      />
      <Name>Декоративна ваза з натурального дерева</Name>
      <Div>
        <FlexContainer>
          <ul>
            {[0, 1, 2, 3, 4].map((index) => (
              <li key={index}>
                <Star
                  style={{ fill: index <= stars ? '#5B5B59' : 'transparent' }}
                >
                  <use href={`${sprite}#star`} />
                </Star>
              </li>
            ))}
          </ul>
          {stars}
        </FlexContainer>

        <Price>₴ {price}</Price>

        <BuyBtnDesc
          type="button"
          className="primaryBtn"
          onClick={() => buyBtnHandle()}
        >
          Купити
        </BuyBtnDesc>

        <DelBtn
          type="button"
          onClick={() => {
            setAmountInCart((amountInCart: number) => amountInCart - 1);
            onClickDelete(id);
          }}
        >
          <svg width={8} height={8}>
            <use href={`${sprite}#close`} />
          </svg>
        </DelBtn>
      </Div>

      <BuyBtn
        type="button"
        className="primaryBtn"
        onClick={() => buyBtnHandle()}
      >
        Купити
      </BuyBtn>
    </>
  );
};
