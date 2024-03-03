import { SliderContainer, ChevronIcon } from './Slider.styled';
import sprite from '../../../images/sprite.svg';

type Image = { image: string };

interface SliderProps {
  arrayToRender: Image[];
  sliderHandler: (payload: number) => void;
  description: string;
}

export const Slider = ({
  arrayToRender,
  sliderHandler,
  description,
}: SliderProps) => {
  // цей метод повинен мати захист коли довжина масиву менша за ширину слайдеру
  // function sliderHandler(payload) {
  // setArray(((width+payload)>array.length) || index+payload<0 ? array : arrayToRender.slice(index+payload, width+payload));
  // }
  return (
    <SliderContainer>
      <button
        className="btn_left"
        type="button"
        onClick={() => sliderHandler(-1)}
        title="To the previous image"
      >
        <ChevronIcon width={8} height={14}>
          <use href={`${sprite}#chevronCategory`} />
        </ChevronIcon>
      </button>
      <ul>
        {arrayToRender.map((el, index) => (
          <li key={index}>
            <img
              src={
                import.meta.env.PROD
                  ? `http://carloteka.com/${el.image}`
                  : `http://localhost:8000/${el.image}`
              }
              alt={description}
              width={640}
              height={512}
              loading="lazy"
            />
          </li>
        ))}
      </ul>

      <button
        className="btn_right"
        type="button"
        onClick={() => sliderHandler(1)}
        title="To the next image"
      >
        <ChevronIcon
          style={{ transform: 'rotate(180deg)' }}
          width={8}
          height={14}
        >
          <use href={`${sprite}#chevronCategory`} />
        </ChevronIcon>
      </button>
    </SliderContainer>
  );
};
