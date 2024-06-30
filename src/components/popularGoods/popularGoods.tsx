import css from './popularGoods.module.scss';
import { useState, useEffect } from 'react';
import { fetchPopularGoods } from '../../api/api';
import { SliderPopulars } from './sliderPopulars/SliderPopulars';
import { Good as Popular } from '../../../@types/custom';

interface PopularGoodsProps {
  width: number;
}

export const PopularGoods = ({ width }: PopularGoodsProps) => {
  const [arrayPopulars, setArrayPopulars] = useState<Popular[] | []>([]);

  useEffect(() => {
    async function getPopulars() {
      try {
        const data = await fetchPopularGoods();

        setArrayPopulars(data.slice(0, 12));
      } catch (error) {
        console.log(error);
      }
    }
    getPopulars();
  }, []);

  let arrayToRender: Popular[] = [];
  if (arrayPopulars?.length > 0) {
    arrayToRender = arrayPopulars.slice(0, width);
  }

  function sliderHandler(payload: number) {
    if (arrayPopulars.length <= width) {
      return;
    }
    const newArray = [...arrayPopulars];

    if (payload === -1) {
      const lastEl: Popular = newArray.pop() as Popular;
      newArray.unshift(lastEl);
    }

    if (payload === 1) {
      const firstEl: Popular = newArray.shift() as Popular;
      newArray.push(firstEl);
    }

    setArrayPopulars(newArray);
  }

  return (
    <section className={css.popularSection}>
      <h2>Популярні товари</h2>
      <SliderPopulars
        arrayToRender={arrayToRender}
        sliderHandler={sliderHandler}
      />
      <SliderPopulars
        arrayToRender={arrayToRender.slice(0, 1)}
        sliderHandler={sliderHandler}
      />
    </section>
  );
};
