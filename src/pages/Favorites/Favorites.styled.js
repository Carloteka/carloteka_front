import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FavoritesBox = styled.div`
  padding: 0 0 32px;
  width: 100%;
  border-bottom: 1px solid #dad4c8;

  @media screen and (min-width: 1440px) {
    padding: 0 0 56px;
    border-bottom: none;
  }

  li {
    display: flex;
    align-items: center;
  }
`;

export const Card = styled.li`
  @media screen and (max-width: 1439px) {
    align-items: flex-start;
  }
  padding: 32px 0;
  flex-wrap: wrap;
  border-bottom: 1px solid #dad4c8;
`;

export const Button = styled.button`
  margin-left: auto;

  @media screen and (min-width: 1440px) {
    width: 416px;
  }
`;

export const EmptyMessage = styled.div`
  margin: 24px auto 0;
  width: 100%;
  text-align: center;

  @media screen and (min-width: 1440px) {
    margin: 56px auto 0;
    width: 542px;
  }

  h2 {
    margin: 16px 0;
    @media screen and (min-width: 1440px) {
      margin: 32px 0;
    }
  }

  & > svg {
    fill: #101010;
    @media screen and (min-width: 1440px) {
      width: 248px;
      height: 248px;
    }
  }
`;

export const GoToCatalog = styled(Link)`
  margin: 0 auto;
  padding: 14.5px 8px;

  justify-content: flex-start;

  font-weight: 500;

  @media screen and (min-width: 1440px) {
    padding: 14.5px 24px;
    width: 418px;
  }

  & > svg {
    margin-right: 8px;
    fill: white;
    transform: rotate(180deg);
    @media screen and (min-width: 1440px) {
      margin-right: 49px;
    }
  }
`;
