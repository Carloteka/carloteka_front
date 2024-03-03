import {
  SliderContainer,
  Chevron,
  ChevronIcon,
  Slider,
} from './SliderPopulars.styled';
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
    <SliderContainer>
      <Chevron
        className="btn_left"
        type="button"
        onClick={() => sliderHandler(-1)}
        title="To the previous"
      >
        <ChevronIcon width={7.5} height={11}>
          <use href={`${sprite}#chevron`} />
        </ChevronIcon>
      </Chevron>

      <Slider>
        {arrayToRender.map((el, index) => (
          <li key={index}>
            <CatalogCard item={el} />
          </li>
        ))}
      </Slider>

      <Chevron
        className="btn_right"
        type="button"
        onClick={() => sliderHandler(1)}
        title="To the next"
      >
        <ChevronIcon
          style={{ transform: 'rotate(180deg)' }}
          width={7.5}
          height={11}
        >
          <use href={`${sprite}#chevron`} />
        </ChevronIcon>
      </Chevron>
    </SliderContainer>
  );
};
