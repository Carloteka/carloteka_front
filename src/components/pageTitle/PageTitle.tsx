import css from './PageTitle.module.scss';
import { useLocation } from 'react-router-dom';
import { pageTitles } from '../../utils/pageTitles';

type Page =
  | 'aboutPayment'
  | 'about'
  | 'cart'
  | 'catalog'
  | 'delivery'
  | 'favorites'
  | 'payment'
  | 'policy'
  | 'refund';

export const PageTitle = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== '/' && (
        <div className="underHeader">
          <h1 className={`limiter ${css.title}`}>
            {pageTitles[pathname.slice(1) as Page]}
          </h1>
        </div>
      )}
    </>
  );
};
