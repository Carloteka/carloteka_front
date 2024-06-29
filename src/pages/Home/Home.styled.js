import styled from 'styled-components';

export const CategorySection = styled.section`
  margin-bottom: 55px;

  @media screen and (min-width: 834px) {
    margin-bottom: 64px;
    padding-top: 8px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 88px;
    padding-top: 0;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 56px;

  @media screen and (min-width: 834px) {
    gap: 64px;
  }

  @media screen and (min-width: 1440px) {
    gap: 72px;
  }
`;

export const Category = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;

  @media screen and (min-width: 834px) {
    display: grid;
    grid-template-columns: repeat(9, 64px);
    grid-template-rows: auto auto auto 48px auto;
    row-gap: 0;
    column-gap: 24px;

    &:nth-child(even) {
      & > div {
        grid-column: 1 / span 4;
      }
      & > h2 {
        grid-column: 5 / span 5;
      }
      & > p {
        grid-column: 5 / span 5;
      }
      & > a {
        grid-column: 5;
      }
    }

    & > p {
      margin: 24px 0;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 1312px;
    grid-template-columns: repeat(12, 80px);
    column-gap: 32px;

    &:nth-child(even) {
      & > div {
        grid-column: 1 / span 6;
      }
      & > h2 {
        grid-column: 7;
        width: 608px;
      }
      & > p {
        grid-column: 7;
        width: 608px;
      }
      & > a {
        grid-column: 7;
      }
    }

    & > p {
      margin: 32px 0;
    }
  }

  & > div {
    @media screen and (min-width: 834px) {
      grid-column: 6 / span 4;
      grid-row: 1 / span 5;
    }

    @media screen and (min-width: 1440px) {
      grid-column: 7 / span 6;
    }
  }

  & > li {
    display: flex;
  }

  & > h2 {
    grid-column: 1 / span 5;
    grid-row: 2;
  }
  & > p {
    color: #363535;
    grid-column: 1 / span 5;
    grid-row: 3;
  }
  & > a {
    grid-column: 1;
    grid-row: 4;
  }
`;
