import css from './Reviews.module.scss';
import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { Paginator } from '../Paginator/Paginator';
import { postReview, fetchReview } from '../../api/api';
import sprite from '../../images/sprite.svg';
import { useGood } from '../../pages/GoodDetail/GoodDetail';
import { Good } from '../../../@types/custom';

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

type Params = { [k: string]: string };

const Reviews = () => {
  const { good } = useGood();

  const [searchParams, setSearchParams] = useSearchParams();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams],
  );

  const [rate, setRate] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [quantity, setQuantity] = useState(reviews?.length);

  const limit = 10;

  async function getGoodDetail() {
    try {
      setIsLoading(true);
      const data = await fetchReview(good?.id, params?.offset);
      setReviews(data.results);
      setQuantity(data.count);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (good?.id) {
      getGoodDetail();
    }
  }, [good?.id, params]);

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

    // console.log('send to backend', data);

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

  function pageChanger(page: number) {
    const offset = (page - 1) * limit;
    let newparams: Params = {};
    if (offset !== 0) {
      newparams = { ...params, offset: offset.toString() };
    } else {
      newparams = { ...params };
      delete newparams.offset;
    }

    setSearchParams(newparams);
  }

  return (
    <>
      {isLoading && <Loader />}
      {Object.keys(good as Good).length > 0 && (
        <section className={css.reviewSection}>
          <form onSubmit={submitHandle} className={css.reviewForm}>
            <p>
              Будьте першим, хто залишив відгук про &quot;{good?.name}&quot;
            </p>
            <div>
              <label>
                Ваш рейтинг
                <input type="range" name="stars" min={0} max={5} step={1} />
              </label>
              <ul>
                <li>
                  <svg
                    className={css.star}
                    onClick={() => setRate(0)}
                    style={{
                      fill: 'transparent',
                    }}
                  >
                    <use href={`${sprite}#star`} />
                  </svg>
                </li>
                {[0, 1, 2, 3, 4].map((index) => (
                  <li key={index} onClick={() => setRate(index + 1)}>
                    <svg
                      className={css.star}
                      style={{
                        fill: index < rate ? '#2d3f24' : 'transparent',
                      }}
                    >
                      <use href={`${sprite}#star`} />
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
            <div className={css.flexContainer}>
              <label>
                Ваш відгук *<textarea name="text" rows={6}></textarea>
              </label>
              <label>
                Ім&apos;я *
                <input type="text" name="first_name" maxLength={50} required />
              </label>
              <label>
                Електронна пошта *
                <input type="email" name="email" maxLength={255} required />
              </label>
            </div>
            <button
              type="submit"
              className="primaryBtn"
              onClick={() => {
                return false;
              }}
            >
              надіслати
            </button>
          </form>
          {reviews.length > 0 && (
            <>
              <ul className={css.reviewList}>
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
                            <svg
                              className={css.star}
                              style={{
                                fill:
                                  index < el.stars ? '#2d3f24' : 'transparent',
                              }}
                            >
                              <use href={`${sprite}#star`} />
                            </svg>
                          </li>
                        ))}
                      </ul>
                      <p className={css.date}>{`${el.date.slice(
                        8,
                        10,
                      )}.${el.date.slice(5, 7)}.${el.date.slice(0, 4)}`}</p>
                      <p>{el.text}</p>
                    </article>
                  </li>
                ))}
              </ul>
              <Paginator
                setCurrentPage={pageChanger}
                currentPage={
                  params.offset ? Math.ceil(+params.offset / limit + 1) : 1
                }
                pageCount={Math.ceil(quantity / limit)}
              />
            </>
          )}
        </section>
      )}
    </>
  );
};
export default Reviews;
