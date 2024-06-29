import { Title, LinkBtn } from './CategoryCard.styled';
import { Slider } from './slider/Slider';
import { useState } from 'react';
import { Categories } from '../../../@types/custom';

type Image = { image: string };

interface CategoryCardProps {
  category: Categories;
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  const { name, description, image_set } = category;

  const [array, setArray] = useState<Image[]>(image_set);
  const width: number = 1;

  const arrayToRender: Image[] = array.slice(0, width);

  function sliderHandler(payload: number) {
    if (array.length <= width) {
      return;
    }
    const newArray = [...array];

    if (payload === -1) {
      const lastEl: Image = newArray.pop() as Image;
      newArray.unshift(lastEl);
    }

    if (payload === 1) {
      const firstEl: Image = newArray.shift() as Image;

      newArray.push(firstEl);
    }

    setArray(newArray);
  }

  // цей метод повинен мати захист коли довжина масиву менша за ширину слайдеру
  // function sliderHandler(payload) {
  // setArray(((width+payload)>array.length) || index+payload<0 ? array : arrayToRender.slice(index+payload, width+payload));
  // }
  return (
    <>
      <Title>{name}</Title>
      <Slider
        arrayToRender={arrayToRender}
        sliderHandler={sliderHandler}
        description={name}
      />
      <p>{description}</p>
      <LinkBtn
        className="secondaryBtn"
        to={`/catalog?category__id=${category.id}`}
      >
        Переглянути
      </LinkBtn>
    </>
  );
};
