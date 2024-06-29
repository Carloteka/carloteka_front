import css from './Paginator.module.css';
import { useRef } from 'react';

interface PaginatorProps {
  setCurrentPage: (_value: number) => void;
  currentPage: number;
  pageCount: number;
}

export const Paginator = ({
  setCurrentPage,
  currentPage,
  pageCount,
}: PaginatorProps) => {
  const firstBtnRef = useRef() as React.MutableRefObject<HTMLButtonElement>;
  const secondBtnRef = useRef() as React.MutableRefObject<HTMLButtonElement>;
  const thirdBtnRef = useRef() as React.MutableRefObject<HTMLButtonElement>;

  let isCurrentFirst = true;
  if (firstBtnRef.current) {
    isCurrentFirst = currentPage == +firstBtnRef.current?.innerText;
  }

  let isCurrentSecond = false;
  if (secondBtnRef.current) {
    isCurrentSecond = currentPage == +secondBtnRef.current?.innerText;
  }

  let isCurrentThird = false;
  if (thirdBtnRef.current) {
    isCurrentThird = currentPage == +thirdBtnRef.current?.innerText;
  }

  function startBtnAction() {
    const firstBtn: HTMLButtonElement = firstBtnRef.current;
    firstBtn.innerText = '1';
    const secondBtn: HTMLButtonElement = secondBtnRef.current;
    secondBtn.innerText = '2';
    const thirdBtn: HTMLButtonElement = thirdBtnRef.current;
    thirdBtn.innerText = '3';
    setCurrentPage(1);
  }

  function prevBtnAction() {
    if (currentPage == +firstBtnRef.current.innerText) {
      if (currentPage === 3) {
        moreBtnAction(-2);
      } else {
        moreBtnAction(-3);
      }
    }
    setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
  }

  function nextBtnAction() {
    if (currentPage >= pageCount) {
      return;
    }
    if (currentPage == +thirdBtnRef.current.innerText) {
      moreBtnAction(3);
    }
    setCurrentPage(currentPage + 1);
  }

  function moreBtnAction(payload: number) {
    if (+firstBtnRef.current.innerText + payload <= pageCount || !pageCount) {
      firstBtnRef.current.innerText = (+firstBtnRef.current.innerText +
        payload) as unknown as string;
      secondBtnRef.current.innerText = (+secondBtnRef.current.innerText +
        payload) as unknown as string;
      thirdBtnRef.current.innerText = (+thirdBtnRef.current.innerText +
        payload) as unknown as string;
    } else {
      startBtnAction();
    }
  }

  function isBtnHidden(button: string) {
    let answer = 'false';

    switch (button) {
      case 'start':
        if (
          (currentPage <= 3 && isCurrentThird) ||
          (currentPage <= 3 && isCurrentSecond) ||
          currentPage < 2
        ) {
          answer = 'true';
        }
        break;

      case 'prev':
        if ((currentPage <= 3 && isCurrentThird) || currentPage <= 2) {
          answer = 'true';
        }
        if (currentPage >= 2 && isCurrentFirst) {
          answer = 'false';
        }
        break;

      case 'more':
        if (pageCount - currentPage <= 2) {
          answer = 'true';
        }
        if (!pageCount) {
          answer = 'false';
        }
        break;

      case 'next':
        if (
          (pageCount - currentPage <= 2 && isCurrentFirst) ||
          pageCount - currentPage < 1
        ) {
          answer = 'true';
        }
        if (!pageCount) {
          answer = 'false';
        }
        break;

      case 'last':
        if (
          (pageCount - currentPage < 3 && isCurrentFirst) ||
          pageCount - currentPage <= 1
        ) {
          answer = 'true';
        }
        if (!pageCount) {
          answer = 'false';
        }
        break;

      default:
        answer = 'false';
    }

    return answer;
  }

  function setPage(el: HTMLElement) {
    const pageNumber = +el.innerText;
    setCurrentPage(pageNumber);
  }

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <ul className={css.paginator}>
      {pageCount <= 1 ? null : (
        <>
          <li data-hidden={isBtnHidden('start')} className={css.first}>
            <button
              type="button"
              data-type={'styled'}
              title="to first page"
              onClick={() => {
                startBtnAction();
                window.scrollTo(0, 0);
              }}
            >
              &lt;&lt;
            </button>
          </li>

          <li data-hidden={isBtnHidden('prev')}>
            <button
              type="button"
              data-type={'styled'}
              title="previous page"
              onClick={() => {
                prevBtnAction();
                scrollToTop();
              }}
            >
              &lt;
            </button>
          </li>

          <li>
            <button
              ref={firstBtnRef}
              type="button"
              disabled={
                firstBtnRef.current
                  ? currentPage == +firstBtnRef.current.innerText
                  : true
              }
              title="first button of page navigation"
              onClick={(e) => {
                setPage(e.target as HTMLElement);
                scrollToTop();
              }}
            >
              {!firstBtnRef.current?.innerText
                ? currentPage
                : firstBtnRef.current.innerText}
            </button>
          </li>
          <li data-hidden={pageCount === currentPage && isCurrentFirst}>
            <button
              ref={secondBtnRef}
              type="button"
              data-hidden={pageCount < +secondBtnRef?.current?.innerText}
              disabled={currentPage == +secondBtnRef?.current?.innerText}
              title="second button of page navigation"
              onClick={(e) => {
                setPage(e.target as HTMLElement);
                scrollToTop();
              }}
            >
              {!secondBtnRef.current?.innerText
                ? currentPage + 1
                : secondBtnRef.current.innerText}
            </button>
          </li>
          <li
            data-hidden={
              !isCurrentThird && isCurrentFirst && pageCount - currentPage <= 1
            }
          >
            <button
              ref={thirdBtnRef}
              type="button"
              data-hidden={pageCount < +thirdBtnRef?.current?.innerText}
              disabled={currentPage == +thirdBtnRef?.current?.innerText}
              title="third button of page navigation"
              onClick={(e) => {
                setPage(e.target as HTMLElement);
                scrollToTop();
              }}
            >
              {!thirdBtnRef.current?.innerText
                ? currentPage + 2
                : thirdBtnRef.current.innerText}
            </button>
          </li>
          <li data-hidden={isBtnHidden('more')} className={css.more}>
            <button
              type="button"
              title="show more pages"
              onClick={() => {
                moreBtnAction(+3);
                setCurrentPage(+thirdBtnRef.current.innerText - 2);
                scrollToTop();
              }}
            >
              ...
            </button>
          </li>
          <li>
            <button
              type="button"
              data-type={'styled'}
              data-hidden={isBtnHidden('next')}
              title="next page"
              onClick={() => {
                nextBtnAction();
                scrollToTop();
              }}
            >
              Наступна
            </button>
          </li>

          <li data-hidden={isBtnHidden('last')} className={css.last}>
            <button
              type="button"
              data-type={'styled'}
              title="last page"
              onClick={() => {
                firstBtnRef.current.innerText = (pageCount -
                  2) as unknown as string;
                secondBtnRef.current.innerText = (pageCount -
                  1) as unknown as string;
                thirdBtnRef.current.innerText = pageCount as unknown as string;
                setCurrentPage(pageCount);
                scrollToTop();
              }}
              disabled={!pageCount}
            >
              {pageCount}
            </button>
          </li>
        </>
      )}
    </ul>
  );
};
