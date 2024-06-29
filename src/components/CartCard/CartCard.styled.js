import styled from 'styled-components';

export const Img = styled.img`
  min-width: 100%;
  height: 304px;
  background-color: #dad4c8;
  grid-column: 1 / span 4;
  grid-row: 2;

  @media screen and (min-width: 834px) {
    grid-column: 1 / span 3;
    grid-row: 1;
    height: 280px;
  }
  @media screen and (min-width: 1440px) {
    height: 336px;
  }
`;

export const Name = styled.h4`
  text-align: start;
  grid-column: 1 / span 4;
  grid-row: 3;

  @media screen and (min-width: 834px) {
    grid-column: 1 / span 3;
    grid-row: 2;
  }
  @media screen and (min-width: 1440px) {
    grid-column: 4 / span 3;
    grid-row: 1;
  }
`;

export const PriceTitle = styled.span`
  grid-row: 4;
`;
export const Price = styled.p`
  grid-column: 3 / span 2;
  grid-row: 4;
  color: #000;

  @media screen and (min-width: 834px) {
    grid-column: 4 / span 2;
    grid-row: 1;
    text-align: start;
    color: #101010;
  }
  @media screen and (min-width: 1440px) {
    grid-column: 7 / span 2;
  }

  &::first-letter {
    color: #5b5b59;
  }
`;
export const AmountTitle = styled.span`
  grid-row: 5;
`;
export const TotalTitle = styled.span`
  grid-row: 6;
`;
export const TotalPrice = styled.p`
  grid-row: 6;
  color: #000;

  @media screen and (min-width: 834px) {
    width: 80px;
    grid-column: 8 / span 2;
    grid-row: 1;
    color: #101010;
  }
  @media screen and (min-width: 1440px) {
    grid-column: 11 / span 2;
  }
  &::first-letter {
    color: #5b5b59;
  }
`;

export const DelBtn = styled.button`
  margin-left: auto;
  width: 24px;
  height: 24px;
  grid-column: 4;
  justify-content: flex-end;

  @media screen and (min-width: 834px) {
    grid-column: 9;
    grid-row: 1;
  }
  @media screen and (min-width: 1440px) {
    grid-column: 12;
  }

  svg {
    stroke: #000;
  }
`;
