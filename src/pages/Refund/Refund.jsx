import { PageTitle } from '../../components/pageTitle/PageTitle';
import { ContainerLimiter } from '../../components/containerLimiter/ContainerLimiter';
import { PrivacyPolicy } from './Refund.styled';
import { PolicyBox } from '../Policy/Policy.styled';
import { PopularGoods } from '../../components/popularGoods';

const Refund = () => {
  return (
    <>
      <PageTitle page={'refund'}></PageTitle>
      <ContainerLimiter paddingTopMob={'56px'} paddingTopDesc={'88px'}>
        <PolicyBox>
          <PrivacyPolicy>
            <h3>Повернення & Обмін</h3>
            <p>
              Повернення або обмін товару здійснюється протягом 14 календарних
              днів з моменту оплати та доставки товару. Нижче описані умови, за
              яких товар повертається, а такожпредставлений порядок повернення
              товару. Для того, щоб ми безкоштовно обміняли пошкоджений товар,
              необхідно, щоб ви:
            </p>
            <ol>
              <li>
                У відділенні компанії перевізника, при отриманні замовлення
                необхідно відкрити та перевірити товар на цілісність;
              </li>
              <li>
                Якщо товар пошкоджений, в нас такого не було, але якщо таке
                станеться, потрібно разом із співробітником відділення скласти
                акт про пошкодження, в якому будуть описані існуючі пошкодження
                (форма 51). Цей акт складається у трьох примірниках і має бути
                підписаний Вами та співробітником відділення транспортної
                компанії. Один екземпляр акту залишається у Вас;
              </li>
              <li>
                Після чого пошкоджена посилка відправляється до нас. Якщо все
                вищеописане пройшло успішно, за наявності горезвісного акту
                (51), ми <b>безкоштовно</b> надсилаємо ваш товар повторно
                протягом 5-и днів.
              </li>
            </ol>
            <p>
              Зверніть увагу, що будь-які претензії за зовнішнім виглядом,
              асортиментом, відповідності отриманого товару замовленому, його
              комплектності та кількості приймаються тільки при отриманні товару
              у кур'єра чи на відділені Нової Пошти. Ставлячи підпис на бланку
              замовлення, ви цим підтверджуєте, що не маєте претензій до
              інтернет-магазину по всіх згаданих вище питань.
            </p>
            <p>
              Якщо після початку експлуатації товару ви помітили приховані
              дефекти, будь ласка, зв'яжіться з нами по одному з телефонів на
              сайті, , або по електроній пошті (
              <a type="email" href='mailto:"info.carloteka@gmail.com'>
                info.carloteka@gmail.com
              </a>
              ) чи через Viber.
            </p>
            <h3>Умови обміну / повернення товару належної якості</h3>
            <p>
              Стаття 9. Відповідно до Закону України «Про захист прав
              споживачів»:
            </p>
            <p>
              Споживач має право обміняти непродовольчі товари належної якості
              на аналогічний у продавця, у якого він був придбаний, якщо товар
              не задовольнив його за формою, габаритами, фасоном, кольором,
              розміром або з інших причин бути не може бути ним використаний за
              призначенням. Споживач має право на обмін товару належної якості
              протягом <span className="bold">14</span> днів, не враховуючи дня
              покупки.
            </p>
            <p className="bold">Обмін товару належної якості провадиться:</p>
            <ul>
              <li>якщо Він не використовувався;</li>
              <li>якщо збережено його товарний вигляд;</li>
              <li>збережено споживчі властивості, пломби, ярлики.</li>
              <li>
                Збережено ярлики, захисні пломби, упаковка, документи, товарний
                чек.
              </li>
            </ul>
            <h3>Умови обміну / повернення товару належної якості</h3>
            <p>Стаття 8. Згідно Закону України «Про захист прав споживачів»:</p>
            <p>
              У разі виявлення протягом встановленого гарантійного строку
              недоліків споживач, в порядку та в строки, встановлені
              законодавством, має право вимагати:
            </p>
            <ul>
              <li>пропорційного зменшення ціни;</li>
              <li>безоплатного усунення недоліків товару в розумний строк;</li>
              <li>відшкодування витрат на усунення недоліків товару.</li>
            </ul>
            <p>
              Вимоги споживача, передбачені цією статтею, не підлягають
              задоволенню, якщо продавець, виробник (підприємство, що
              задовольняє вимоги споживача, встановлені частиною першою цієї
              статті) доведуть, що недоліки товару виникли внаслідок порушення
              споживачем правил користування товаром або його зберігання.
              Споживач має право братиучасть у перевірці якості товару особисто
              або через свого представника.
            </p>
            <h3>
              Як обміняти або повернути товар, який не влаштував, не сподобався
              або з іншої причини?
            </h3>
            <ul>
              <li>
                Переконайтеся, будь ласка, що від дати покупки минуло не більше{' '}
                <span className="bold">14 днів</span>
                без урахування дня купівлі;
              </li>
              <li>
                Перевірте, будь ласка, відсутність вашого товару в{' '}
                <a href="https://zakon.rada.gov.ua/laws/show/172-94-%D0%BF#Text">
                  {' '}
                  Переліку товарів
                </a>{' '}
                належної якості, що не підлягають обміну чи поверненню;
              </li>
              <li>
                Переконайтеся, що на товарі відсутні ознаки використання та
                пошкодження, наявна повна комплектація товару (як на момент
                придбання), збережено його товарний вигляд та всі споживчі
                властивості.
              </li>
              <li>
                При обміні або повернені товару, якщо від дати купівлі не минуло{' '}
                <span className="bold">14 днів</span>, обов’язково додайте
                актуальні реквізити карткового рахунку, сума повернення дорівнює
                сумі по чеку при умові сплати клієнтом за доставку або
                замінюється на аналогічний товар.
              </li>
            </ul>
            <h3>Варіанти повернення товару:</h3>
            <ul>
              <li>
                <span className="bold">
                  Повернення товару в Дніпрі і повернення коштів
                </span>{' '}
                за нього можна зробити за адресою: м.Дніпро, Гоголя 17
              </li>
              <li>
                <span className="bold">Повернення з інших міст України</span>{' '}
                відбувається перевізником компанії Нова Пошта за адресою з якої
                вам було відправлено товар, або зв'яжіться із нами по одному з
                телефонів на сайті, або по електроній пошті (
                <a type="email" href='mailto:"info.carloteka@gmail.com'>
                  info.carloteka@gmail.com
                </a>
                ) чи через Viber, для уточнення адреси відправлення і повернення
                коштів у разі винекнення такої потреби (повернення коштів
                відбувається протягом 3-х банківських днів з моменту отримання
                нами товару). Зверніть вашу увагу на те що повернення товару
                перевізником компанії Нова Пошта відбувається за рахунок
                відправника!!!
              </li>
            </ul>
          </PrivacyPolicy>
          <div>
            <PopularGoods width={1} />
          </div>
        </PolicyBox>
      </ContainerLimiter>
    </>
  );
};
export default Refund;
