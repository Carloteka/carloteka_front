import css from './Greeting.module.scss';
import { Link } from 'react-router-dom';
import sprite from '../../images/sprite.svg';
import heroImgPng from '../../images/Shield_and_sword-1.png';
import heroImgAfiv from '../../images/Shield_and_sword-1.avif';

export const Greeting = () => {
  return (
    <div className="underHeader">
      <div className={`limiter ${css.heroWrapper}`}>
        <h1>Дерев&apos;яні вироби на будь-який смак</h1>
        <picture className={css.img}>
          <source
            srcSet={heroImgAfiv}
            width="288"
            height="290"
            type={'image/avif'}
          />
          <img
            src={heroImgPng}
            alt="Shield and sword"
            width="288"
            height="290"
          />
        </picture>
        <p className={css.description}>
          Вітаємо в інтернет-магазині КАРЛОТЕКА. Ми виготовляємо якісні
          дерев&apos;яні вироби. У нас ви можете купити або замовити іграшкові
          мечі, щити, машинки, пазли, 3Д пазли, посуд з дерева (підноси для
          піци, посуд для суші, підноси для подачі кави) для ресторанів, кафе,
          барів, магазинів тощо.
        </p>
        <Link to={'/catalog'} className="primaryBtn">
          Детальніше
          <svg width={16} height={16}>
            <use href={`${sprite}#arrow-right`} />
          </svg>
        </Link>
      </div>
    </div>
  );
};
