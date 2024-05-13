import { useState, useContext } from 'react';
import { CartContext } from '../../components/Layout';
import { PageTitle } from '../../components/pageTitle/PageTitle';
import { ContainerLimiter } from '../../components/containerLimiter/ContainerLimiter';
import {
  ListHeaderWrapper,
  Name,
  Price,
  Quantity,
  Total,
  FavoritesList,
  Card,
  Button,
  EmptyMessage,
  FlexBox,
  GoToCatalog,
  FlexContainer,
  CouponBox,
  BuyBox,
  GoToPayment,
} from './Cart.styled';
import { CartCard } from '../../components/CartCard/CartCard';
import {
  addToCart,
  toggleLocalStorage,
  checkLocalStorage,
  getTotalPrice,
} from '../../utils';
import sprite from '../../images/sprite.svg';
import { Good } from '../../../@types/custom';

const Cart = () => {
  const { setAmountInCart } = useContext(CartContext);

  const goodsInCart: Good[] = checkLocalStorage('cart', []);

  const [inCart, setInCart] = useState<Good[]>(goodsInCart);
  console.log(inCart);

  function clearCart() {
    localStorage.cart = [];
    setInCart([]);
    setAmountInCart(0);
  }

  function delFromCart(id: number) {
    const newArray = goodsInCart.filter((el: { id: number }) => el.id !== id);
    toggleLocalStorage(true, id);
    setInCart(newArray);
  }

  function increment(amount: number, good: Good) {
    const newArray: Good[] = [...inCart];
    newArray[
      inCart.findIndex((el: { id: number }) => el.id === good.id)
    ].quantity = amount;

    addToCart(amount, good, 'replace');
    setInCart(newArray);
  }

  return (
    <>
      <PageTitle page={'cart'}></PageTitle>
      <ContainerLimiter paddingTopMob={'32px'} paddingTopDesc={'56px'}>
        <ListHeaderWrapper>
          <Name>Товар</Name>
          <Price>Ціна</Price>
          <Quantity>Кількість</Quantity>
          <Total>Загальна вартість</Total>
        </ListHeaderWrapper>
        <FavoritesList>
          {inCart.map((el: Good) => (
            <Card key={el.id}>
              <CartCard
                good={el}
                onClickDelete={delFromCart}
                increment={increment}
              />
            </Card>
          ))}
        </FavoritesList>
        {inCart.length > 0 ? (
          <FlexBox>
            <GoToCatalog to={'/catalog'} className="secondaryBtn">
              <svg width={16} height={16}>
                <use href={`${sprite}#arrow-right`} />
              </svg>
              продовжити покупки
            </GoToCatalog>
            <Button
              type="button"
              onClick={() => clearCart()}
              className="secondaryBtn"
            >
              Очистити кошик
            </Button>
          </FlexBox>
        ) : (
          <EmptyMessage>
            <svg width={124} height={124}>
              <use href={`${sprite}#cart`} />
            </svg>
            <h2>Ваш кошик порожній</h2>
            <GoToCatalog to={'/catalog'} className="primaryBtn">
              <svg width={14} height={9}>
                <use href={`${sprite}#arrow-right`} />
              </svg>
              повернутись до покупок
            </GoToCatalog>
          </EmptyMessage>
        )}
        {inCart.length > 0 && (
          <FlexContainer>
            <CouponBox>
              <h3>Купон на знижку</h3>
              <label>
                Введіть номер купону
                <input type="text" placeholder="Номер купону" />
              </label>
              <Button
                className="secondaryBtn"
                type="button"
                onClick={() => console.log('apply coupon')}
              >
                застосувати купон
              </Button>
            </CouponBox>
            <BuyBox>
              <div>
                <div>
                  <p>Ціна</p>
                  <p>₴ {getTotalPrice(inCart)}</p>
                </div>
                <div>
                  <p>Загальна вартість</p>
                  <p>₴ {getTotalPrice(inCart)}</p>
                </div>
              </div>

              <GoToPayment to={'/delivery'} className="primaryBtn">
                перейти до оплати
                <svg width={14} height={9}>
                  <use href={`${sprite}#arrow-right`} />
                </svg>
              </GoToPayment>
            </BuyBox>
          </FlexContainer>
        )}
      </ContainerLimiter>
    </>
  );
};
export default Cart;
