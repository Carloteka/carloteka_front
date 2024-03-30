import { SectionDescription } from './Description.styled';
import { marked } from 'marked';
import { useGood } from '../../pages/GoodDetail/GoodDetail';

const Description = () => {
  const { good } = useGood();

  function createMarkup() {
    return { __html: marked.parse(good?.description as string) as string };
  }

  return (
    good && (
      <SectionDescription>
        <div>
          <h4>{good.name}</h4>

          <div dangerouslySetInnerHTML={createMarkup()}></div>
        </div>
        <img
          src={
            import.meta.env.PROD
              ? `http://carloteka.com/${good.image_set[0].image}`
              : `http://localhost:8000/${good.image_set[0].image}`
          }
          alt={good.name}
          width={288}
          height={350}
        ></img>
      </SectionDescription>
    )
  );
};

export default Description;
