import {
  InfoBox,
  DeliveryPrice,
  Total,
  PolicyLink,
} from './InvoiceInfo.styled';
import { Good } from '../../../@types/custom';
// type Good = {
//   name: string;
//   price: number;
//   id_name: string;
//   quantity: number;
// };

interface InvoiceInfoProps {
  inCart: Good[];
}

export const InvoiceInfo = ({ inCart }: InvoiceInfoProps) => {
  function getTotalPrice() {
    return inCart.reduce(
      (total: number, el: { quantity: number; price: number }) =>
        el.price * (el?.quantity ? el.quantity : 1) + total,
      0,
    );
  }

  return (
    <InfoBox>
      <h3>Ваше замовлення</h3>
      <div>
        <h4>Товар</h4>
        <h4>Вартість</h4>
      </div>

      <ul>
        {inCart?.map((el) => (
          <li key={el.id}>
            <div>
              <p>
                {el.name}
                {el.quantity > 1 && ` (${el.quantity} шт.)`}
              </p>
              <p>₴ {el.price * el.quantity}</p>
            </div>
          </li>
        ))}
      </ul>

      <DeliveryPrice>
        <p>Вартість доставки</p>
        <p>₴ 95</p>
      </DeliveryPrice>

      <Total>
        <p>Загальна сума:</p>
        <p>₴ {getTotalPrice() + 95}</p>
      </Total>

      <h3>Метод оплати</h3>
      <p>
        Ви можете оплатити з допомогою кредитної/дебітної картки, Apple Pay,
        Google Pay, а також готівкою.
      </p>
      <p>
        Ваші особисті дані використовуватимуться для обробки вашого замовлення,
        можливості користування цим веб-сайтом та для інших цілей, описаних у
        нашій
        <PolicyLink to={'./policy'}> політиці конфіденційності.</PolicyLink>
      </p>
    </InfoBox>
  );
};
