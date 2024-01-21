import { useState, useContext } from 'react';
import { CartContext } from '../../components/Layout';
import { PageTitle } from '../../components/pageTitle/PageTitle';
import { ContainerLimiter } from '../../components/containerLimiter/ContainerLimiter';
import {
  ListHeaderWrapper,
  Name,
  Price,
  Quantity,
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
import { toggleCartInLocalStorage } from '../../utils/toggleCartInLocalStorage';
import { addToCart } from '../../utils/addToCart';
import sprite from '../../images/sprite.svg';

type Good = {
  images: [{ image: string }];
  name: string;
  price: number;
  length: number;
  id_name: string;
  quantity: number;
};

const Cart = () => {
  const { setAmountInCart } = useContext(CartContext);

  let goodsInCart: { id: string; amount: number }[] = [];

  if (localStorage.getItem('cart')) {
    goodsInCart = JSON.parse(localStorage.getItem('cart') as string);
  }

  let goods: [] = [];

  if (localStorage.getItem('goods')) {
    goods = JSON.parse(localStorage.getItem('goods') as string);
  }

  const goodsInCartArray = goods.filter(
    (el: { id_name: string; quantity: number }) =>
      goodsInCart.some((item) => {
        if (el.id_name === item.id) {
          el.quantity = item.amount;
          return true;
        } else return false;
      }),
  );

  const [inCart, setInCart] = useState<Good[]>(
    goodsInCartArray.filter((el: { length: number }) => el.length !== 0),
  );

  function clearCart() {
    localStorage.cart = [];
    setInCart([]);
    setAmountInCart(0);
  }

  function delFromCart(id: string) {
    const newArray = goodsInCartArray.filter(
      (el: { id_name: string }) => el.id_name !== id,
    );
    toggleCartInLocalStorage(true, id);
    setInCart(newArray);
  }

  function getTotalPrice() {
    return inCart.reduce(
      (total: number, el: { quantity: number; price: number }) =>
        el.price * (el?.quantity ? el.quantity : 1) + total,
      0,
    );
  }

  function increment(amount: number, id: string) {
    const newArray: Good[] = [...inCart];
    newArray[
      inCart.findIndex((el: { id_name: string }) => el.id_name === id)
    ].quantity = amount;

    addToCart(amount, id, 'replace');
    setInCart(newArray);
  }

  return (
    <>
      <PageTitle>Кошик</PageTitle>
      <ContainerLimiter paddingTopMob={'32px'} paddingTopDesc={'56px'}>
        <ListHeaderWrapper>
          <Name>Товар</Name>
          <Price>Ціна</Price>
          <Quantity>Кількість</Quantity>
          <p>Загальна вартість</p>
        </ListHeaderWrapper>
        <FavoritesList>
          {inCart.map((el: Good) => (
            <Card key={el.id_name}>
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
            <h2>Ваш кошик пустий</h2>
            <GoToCatalog to={'/catalog'} className="secondaryBtn">
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
                  <p>₴ {getTotalPrice()}</p>
                </div>
                <div>
                  <p>Загальна вартість</p>
                  <p>₴{getTotalPrice()}</p>
                </div>
              </div>

              <GoToPayment to={'/payment'} className="primaryBtn">
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
