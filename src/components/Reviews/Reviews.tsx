import {
  SectionReviews,
  Form,
  Star,
  TextAreaLabel,
  FlexContainer,
  ReviewList,
  Date,
} from './Reviews.styled';
import { useState, useEffect } from 'react';
import { Loader } from '../Loader/Loader';
import { postReview, fetchReview } from '../../api/api';
import sprite from '../../images/sprite.svg';
import { useGood } from '../../pages/GoodDetail/GoodDetail';

type Review = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  // state: 'pending';
  text: string;
  date: string;
  updated_at: string;
  stars: number;
  item: number;
};

const Reviews = () => {
  const { good } = useGood();

  const [rate, setRate] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState<Review[] | undefined>();
  console.log(reviews);

  async function getGoodDetail() {
    try {
      setIsLoading(true);
      const data = await fetchReview(good?.id);
      setReviews(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getGoodDetail();
  }, [good?.id]);

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

    async function createReiew() {
      try {
        setIsLoading(true);
        const ok = await postReview(good?.id, data);
        if (ok === 201) {
          getGoodDetail();
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    createReiew();
  }

  return (
    <>
      {isLoading && <Loader />}
      {good && (
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
                Ім&apos;я *
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
          {reviews && (
            <ReviewList>
              {reviews?.map((el) => (
                <li key={el.id}>
                  <article>
                    <img
                      src="../../src/images/photo.jpg"
                      alt="user avatar"
                      width={80}
                      height={80}
                    ></img>
                    <h4>
                      {el.first_name} {el.last_name}
                    </h4>
                    <ul>
                      {[0, 1, 2, 3, 4].map((index) => (
                        <li key={index}>
                          <Star
                            style={{
                              fill:
                                index < el.stars ? '#2d3f24' : 'transparent',
                            }}
                          >
                            <use href={`${sprite}#star`} />
                          </Star>
                        </li>
                      ))}
                    </ul>
                    <Date>{`${el.date.slice(8, 10)}.${el.date.slice(
                      5,
                      7,
                    )}.${el.date.slice(0, 4)}`}</Date>
                    <p>{el.text}</p>
                  </article>
                </li>
              ))}
            </ReviewList>
          )}
        </SectionReviews>
      )}
    </>
  );
};
export default Reviews;
