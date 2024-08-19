import css from './Description.module.scss';
import { marked } from 'marked';
import { useGood } from '../../pages/GoodDetail/GoodDetail';
import defaultImage from '../../images/Shield_and_sword-1.png';
import { Good } from '../../../@types/custom';

const Description = () => {
  const { good } = useGood();

  function createMarkup() {
    return {
      __html: marked.parse(
        good?.description ? good?.description : ('' as string),
      ) as string,
    };
  }

  return (
    Object.keys(good as Good).length > 0 && (
      <section className={css.descriptionSection}>
        <div>
          <h4>{good?.name}</h4>

          <div dangerouslySetInnerHTML={createMarkup()}></div>
        </div>
        <img
          src={
            import.meta.env.PROD
              ? `http://carloteka.com/${good?.image_set[0].image}`
              : `http://localhost:8000/${good?.image_set[0].image}`
          }
          alt={good?.name}
          width={288}
          height={350}
          onError={(event) => {
            event.currentTarget.src = defaultImage;
          }}
        ></img>
      </section>
    )
  );
};

export default Description;
