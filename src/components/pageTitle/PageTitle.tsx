import { Wrapper, BreadCrumbs } from './PageTitle.styled';
import { Link } from 'react-router-dom';
import { pageTitles } from '../../utils/pageTitles';

interface PageTitleProps {
  page: string;
  name?: string;
}

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

export const PageTitle = ({ page, name }: PageTitleProps) => {
  return (
    <Wrapper>
      <BreadCrumbs>
        <li>
          <Link to={`/`}>Головна сторінка</Link>
        </li>
        <li>
          <Link to={`/${page}`} className={!name ? 'disabled' : ''}>
            {pageTitles[page as Page]}
          </Link>
        </li>
        {name && <li> {name}</li>}
      </BreadCrumbs>
    </Wrapper>
  );
};
