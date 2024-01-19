import { TextContainer, Title, LinkBtn } from './CategoryCard.styled';
import { Slider } from './slider/Slider';
import { useState } from 'react';

type Categories = {
  mini_image: string;
  images: [{ image: string }];
  name: string;
  price: number;
  id_name: string;
  description: string;
};

type Image = { image: string };

interface CategoryCardProps {
  category: Categories;
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  const { name, description, images } = category;

  const [array, setArray] = useState<Image[]>(images);
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
      <Slider arrayToRender={arrayToRender} sliderHandler={sliderHandler} />

      <TextContainer>
        <Title>{name}</Title>
        <Slider arrayToRender={arrayToRender} sliderHandler={sliderHandler} />
        <p>{description}</p>
        <LinkBtn
          className="secondaryBtn"
          to={`/catalog?category-id-name=${category.id_name}`}
        >
          Переглянути
        </LinkBtn>
      </TextContainer>
    </>
  );
};
