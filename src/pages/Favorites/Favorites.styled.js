import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { gridStyles } from '../../gridStyles';

export const ListHeaderWrapper = styled.div`
  padding: 8px;
  width: 100%;
  font-size: 16px;
  line-height: calc(23 / 16);
  text-align: start;
  background-color: #dad4c8;
  ${gridStyles};

  @media screen and (min-width: 834px) {
    padding: 12px;
    font-size: 20px;
    line-height: calc(25 / 20);
  }

  & .mobVers {
    display: block;

    @media screen and (min-width: 834px) {
      display: none;
    }
  }
  & .tablVers {
    display: none;

    @media screen and (min-width: 834px) {
      display: block;
    }
  }

  & .mobVers,
  & .tablVers {
    grid-column: 3 / span 2;
    text-align: end;

    @media screen and (min-width: 834px) {
      grid-column: 6 / span 4;
      text-align: left;
    }
    @media screen and (min-width: 1440px) {
      grid-column: 8 / span 5;
    }
  }
`;

export const Name = styled.p`
  grid-column: 1 / span 1;

  @media screen and (min-width: 834px) {
    grid-column: 2 / span 1;
  }
`;

export const Price = styled.p`
  display: none;

  @media screen and (min-width: 834px) {
    display: block;
    grid-column: 4 / span 1;
  }
  @media screen and (min-width: 1440px) {
    grid-column: 7 / span 1;
  }
`;

export const FavoritesList = styled.ul`
  margin: 32px 0;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  border-bottom: 1px solid #dad4c8;

  @media screen and (min-width: 834px) {
    margin: 24px 0 46px;
    padding-bottom: 46px;
    gap: 46px;
  }
  @media screen and (min-width: 1440px) {
    margin: 56px 0;
    padding-bottom: 56px;
    gap: 56px;
  }

  & > li * {
    @media screen and (min-width: 1440px) {
      align-self: center;
      grid-row: 1;
    }
  }
`;

export const Card = styled.li`
  display: grid;
  grid-template-columns: 60px auto 118px;
  grid-template-rows: 41px 31px 8px 32px 48px;

  @media screen and (min-width: 834px) {
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: 158px 25px 97px auto;
    column-gap: 24px;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
  }
`;

export const Button = styled.button`
  margin-left: auto;

  @media screen and (min-width: 834px) {
    margin-left: 34.38%;
    width: 416px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: auto;
  }
`;

export const EmptyMessage = styled.div`
  margin: 24px auto 0;
  width: 100%;
  text-align: center;

  @media screen and (min-width: 834px) {
    margin: 93px auto 0;
    padding-bottom: 102px;
  }
  @media screen and (min-width: 1440px) {
    margin: 56px auto 0;
    padding-bottom: 0;
    width: 542px;
  }

  h2 {
    margin: 16px 0;
    @media screen and (min-width: 834px) {
      margin: 32px 0;
    }
  }

  & > a {
    margin: 0 auto;
    height: 48px;
  }

  & > svg {
    fill: #101010;
    @media screen and (min-width: 834px) {
      width: 188px;
      height: 188px;
    }
    @media screen and (min-width: 1440px) {
      width: 248px;
      height: 248px;
    }
  }
`;

export const GoToCatalog = styled(Link)`
  margin: 0 auto;
  padding: 14.5px 8px;

  @media screen and (min-width: 834px) {
    margin: 0;
    padding: 14.5px 24px;
    width: 328px;
  }
  @media screen and (min-width: 1440px) {
    width: 415px;
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
