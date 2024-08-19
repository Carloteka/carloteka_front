import css from './Home.module.scss';
import { useState, useEffect } from 'react';
import { Greeting } from '../../components/greeting';
import { CategoryCard } from '../../components/category-card';
import { PopularGoods } from '../../components/popularGoods';
// import categoryData from 'src/mockdata/categories.json';
import { ContainerLimiter } from '../../components/containerLimiter/ContainerLimiter';
import { Categories } from '../../../@types/custom';

const Home = () => {
  const [categories, setCategories] = useState<[] | Categories[]>([]);

  useEffect(() => {
    if (localStorage.getItem('categories')) {
      const item = JSON.parse(
        localStorage.getItem('categories') as string,
      ) as Categories[];
      setCategories(item);
    }
  }, []);
  // JSON.stringify(categoryData);

  return (
    <>
      <Greeting />
      <ContainerLimiter>
        <section className={css.categories}>
          <ul>
            {categories?.map((el: Categories) => (
              <li key={el.id} className={css.category}>
                <CategoryCard category={el} />
              </li>
            ))}
          </ul>
        </section>

        <PopularGoods width={4} />
      </ContainerLimiter>
    </>
  );
};

export default Home;
