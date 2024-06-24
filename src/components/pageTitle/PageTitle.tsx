import { Wrapper } from './PageTitle.styled';
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
        <Wrapper>
          <h1 className="limiter">{pageTitles[pathname.slice(1) as Page]}</h1>
        </Wrapper>
      )}
    </>
  );
};
