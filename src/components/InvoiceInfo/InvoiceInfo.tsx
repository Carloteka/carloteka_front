import css from './InvoiceInfo.module.scss';
import { Link } from 'react-router-dom';
import { Good } from '../../../@types/custom';
// import { getTotalPrice } from '../../utils';

interface InvoiceInfoProps {
  inCart: Good[];
  total: number;
}

export const InvoiceInfo = ({ inCart, total }: InvoiceInfoProps) => {
  return (
    <div className={css.infoBox}>
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
              <p>₴ {el.price * (el?.quantity ? el.quantity : 1)}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className={css.total}>
        <p>Загальна сума:</p>
        <p>₴ {total.toFixed(2)}</p>
      </div>

      <h3>Метод оплати</h3>
      <p>
        Ви можете оплатити з допомогою кредитної/дебітної картки, Apple Pay,
        Google Pay, а також готівкою.
      </p>
      <p>
        Ваші особисті дані використовуватимуться для обробки вашого замовлення,
        можливості користування цим веб-сайтом та для інших цілей, описаних у
        нашій
        <Link to={'./policy'} className={css.policyLink}>
          {' '}
          політиці конфіденційності.
        </Link>
      </p>
    </div>
  );
};
