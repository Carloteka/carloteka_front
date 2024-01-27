import {
  SectionReviews,
  Form,
  Star,
  TextAreaLabel,
  FlexContainer,
} from './Reviews.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItemDetails } from '../../api/api';
import sprite from '../../images/sprite.svg';

type Good = {
  name: string;
};

const Reviews = () => {
  const { goodId } = useParams();

  const [good, setGood] = useState<Good>();
  const [rate, setRate] = useState(0);

  useEffect(() => {
    async function getGoodDetail() {
      try {
        const data = await fetchItemDetails(goodId);
        setGood(data);
      } catch (error) {
        console.log(error);
      }
    }
    getGoodDetail();
  }, [goodId]);

  function submitHandle(e: React.FormEvent) {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const elementsCollection =
      target.elements as HTMLCollectionOf<HTMLInputElement>;
    const elements = Array.from(elementsCollection).filter(
      (el) => el.value !== '',
    );

    type dataObject = {
      [key: string]: string | number | undefined;
    };

    const data: dataObject = {
      rate: 3.5,
    };

    elements.map((el) => (data[el.name] = el.value));
    data.rate = rate;
    console.log('send to backend', data);
  }

  return (
    good && (
      <SectionReviews>
        <Form onSubmit={submitHandle}>
          <p>Будьте першим, хто залишив відгук про "{good.name}"</p>
          <div>
            <label>
              Ваш рейтинг
              <input type="range" name="rate" min={0} max={5} step={1} />
            </label>
            <ul>
              <li>
                <Star
                  onClick={() => setRate(0)}
                  style={{
                    fill: 'transparent',
                  }}
                >
                  <use href={`${sprite}#star`} />
                </Star>
              </li>
              {[0, 1, 2, 3, 4].map((index) => (
                <li key={index} onClick={() => setRate(index + 1)}>
                  <Star
                    style={{
                      fill: index < rate ? '#2d3f24' : 'transparent',
                    }}
                  >
                    <use href={`${sprite}#star`} />
                  </Star>
                </li>
              ))}
            </ul>
          </div>
          <FlexContainer>
            <TextAreaLabel>
              Ваш відгук *<textarea name="review" rows={6} required></textarea>
            </TextAreaLabel>
            <label>
              Ім'я *;
              <input type="text" name="name" required />
            </label>
            <label>
              Електронна пошта *<input type="email" name="email" required />
            </label>
          </FlexContainer>
          <button
            type="submit"
            className="primaryBtn"
            onClick={() => {
              return false;
            }}
          >
            надіслати
          </button>
        </Form>
      </SectionReviews>
    )
  );
};
export default Reviews;
