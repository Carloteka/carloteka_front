import css from './SliderPopulars.module.scss';
import sprite from '../../../images/sprite.svg';
import { CatalogCard } from '../../CatalogCard/CatalogCard';
import { Good as Popular } from '../../../../@types/custom';

interface SliderPopularsProps {
  arrayToRender: Popular[];
  sliderHandler: (payload: number) => void;
}

export const SliderPopulars = ({
  arrayToRender,
  sliderHandler,
}: SliderPopularsProps) => {
  return (
    <div className={css.sliderBox}>
      <button
        className={`${css.chevron} ${css.btn_left}`}
        type="button"
        onClick={() => sliderHandler(-1)}
        title="To the previous"
      >
        <svg width={7.5} height={11}>
          <use href={`${sprite}#chevron`} />
        </svg>
      </button>

      <ul className={css.sliderItems}>
        {arrayToRender.map((el, index) => (
          <li key={index}>
            <CatalogCard item={el} />
          </li>
        ))}
      </ul>

      <button
        className={`${css.chevron} ${css.btn_right}`}
        type="button"
        onClick={() => sliderHandler(1)}
        title="To the next"
      >
        <svg style={{ transform: 'rotate(180deg)' }} width={7.5} height={11}>
          <use href={`${sprite}#chevron`} />
        </svg>
      </button>
    </div>
  );
};
