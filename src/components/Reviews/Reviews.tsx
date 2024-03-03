import {
  SectionReviews,
  Form,
  Star,
  TextAreaLabel,
  FlexContainer,
} from './Reviews.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchItemDetails, postReview } from '../../api/api';
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
      stars: 3.5,
      last_name: 'last name',
      text: '',
    };

    elements.map((el) => (data[el.name] = el.value));
    data.stars = rate;

    console.log('send to backend', data);
    postReview(goodId, data);
  }

  return (
    good && (
      <SectionReviews>
        <Form onSubmit={submitHandle}>
          <p>Будьте першим, хто залишив відгук про &quot;{good.name}&quot;</p>
          <div>
            <label>
              Ваш рейтинг
              <input type="range" name="stars" min={0} max={5} step={1} />
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
              Ваш відгук *<textarea name="text" rows={6}></textarea>
            </TextAreaLabel>
            <label>
              Ім&apos;я *;
              <input type="text" name="first_name" maxLength={50} required />
            </label>
            <label>
              Електронна пошта *
              <input type="email" name="email" maxLength={255} required />
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
