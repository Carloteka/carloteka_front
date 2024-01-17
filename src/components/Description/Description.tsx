import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItemDetails } from '../../api/api';
import { SectionDescription } from './Description.styled';
import { marked } from 'marked';

type Good = { images: [{ image: string }]; name: string; description: string };

const Description = () => {
  const { goodId } = useParams();
  const description = useRef<HTMLDivElement>(null);
  const [good, setGood] = useState<Good>();

  useEffect(() => {
    async function getGoodDetail() {
      try {
        const data = await fetchItemDetails(goodId);
        console.log(data);
        setGood(data);
        getDescription(data.description);
      } catch (error) {
        console.log(error);
      }
    }
    getGoodDetail();
  }, [goodId]);

  function getDescription(markdown: string) {
    const target = description.current;
    if (target) {
      target.innerHTML = marked.parse(markdown) as string;
    }
  }

  return (
    good && (
      <SectionDescription
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          borderTop: '1px solid #A7A5A3',
          paddingTop: '40px',
          color: '#000',
        }}
      >
        <div>
          <h4 style={{ marginBottom: '12px' }}>{good.name}</h4>

          <div ref={description}></div>
        </div>
        <img
          src={
            import.meta.env.PROD
              ? `http://carloteka.com/${good.images[0].image}`
              : `http://localhost:8000/${good.images[0].image}`
          }
          alt={good.name}
          width={528}
          height={528}
        ></img>
      </SectionDescription>
    )
  );
};

export default Description;
