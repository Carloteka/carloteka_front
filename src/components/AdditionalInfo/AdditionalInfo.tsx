import { SectionAdditionalInfo } from './AdditionalInfo.styled';
import sprite from '../../images/sprite.svg';
import { useGood } from '../../pages/GoodDetail/GoodDetail';
import { Good } from '../../../@types/custom';

const AdditionalInfo = () => {
  const { good } = useGood();

  return (
    Object.keys(good as Good).length > 0 && (
      <SectionAdditionalInfo>
        <table>
          <tbody>
            <tr>
              <td>Матеріал</td>
              <td>Дерево, вкрите коричневим лаком, найвищого рівня якості</td>
            </tr>
            {good?.length && (
              <tr>
                <td>Довжина</td>
                <td>{Math.floor(good.length)} см</td>
              </tr>
            )}
            {good?.height && (
              <tr>
                <td>Висота</td>
                <td>{Math.floor(good.height)} см</td>
              </tr>
            )}
            {good?.width && (
              <tr>
                <td>Діаметр</td>
                <td>{Math.floor(good.width)} см</td>
              </tr>
            )}

            <tr>
              <td>Країна-виробник товару</td>
              <td>Україна</td>
            </tr>
          </tbody>
        </table>

        <details>
          <summary>
            <h3>Доставка</h3>
            <svg width={24} height={24}>
              <use href={`${sprite}#chevronRound`} />
            </svg>
          </summary>
          <table>
            <tbody>
              <tr>
                <td>Нова Пошта</td>
                <td>від 40 грн</td>
              </tr>
              <tr>
                <td>Укрпошта Стандарт</td>
                <td>від 25 грн</td>
              </tr>
              <tr>
                <td>Кур'єром</td>
                <td>від 35 грн</td>
              </tr>
            </tbody>
          </table>
        </details>
      </SectionAdditionalInfo>
    )
  );
};
export default AdditionalInfo;
