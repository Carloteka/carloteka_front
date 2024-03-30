import styled from 'styled-components';

export const Img = styled.img`
  width: 60px;
  height: 82px;
  grid-column: 1;
  grid-row: 1 / span 3;
  background-color: #dad4c8;

  @media screen and (min-width: 834px) {
    width: 240px;
    height: 280px;
    grid-column: 1 / span 3;
  }
  @media screen and (min-width: 1440px) {
    width: 304px;
    height: 336px;
  }
`;

export const Name = styled.h4`
  padding-left: 8px;
  grid-column: 2;
  grid-row: 1 / span 3;
  text-align: left;
  align-self: center;

  @media screen and (min-width: 834px) {
    padding-left: 0;
    padding-top: 16px;
    grid-column: 1 / span 3;
    grid-row: 4;
    align-self: flex-end;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 0;
    grid-column: 4 / span 3;
  }
`;

export const FlexContainer = styled.div`
  margin-right: 0;
  grid-column: 3;
  grid-row: 1;
  display: flex;
  justify-content: flex-end;
  gap: 4px;
  width: 100%;
  font-size: 16px;
  line-height: calc(19 / 16);

  @media screen and (min-width: 834px) {
    grid-column: 6 / span 2;
    grid-row: 2;
    align-self: center;
    gap: 16px;
    font-size: 20px;
    line-height: calc(25 / 20);
  }
  @media screen and (min-width: 1440px) {
    grid-column: 8 / span 2;
    justify-content: flex-start;
    color: #5b5b59;
  }

  & > ul {
    display: flex;
    gap: 4px;
    @media screen and (min-width: 834px) {
      gap: 8px;
    }
  }
`;

export const Price = styled.p`
  grid-column: 3;
  grid-row: 2;
  text-align: end;
  color: #000;

  @media screen and (min-width: 834px) {
    grid-column: 4 / span 2;
    grid-row: 2;
    font-size: 20px;
    line-height: calc(25 / 20);
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

export const Star = styled.svg`
  width: 16px;
  height: 15px;
  stroke: #5b5b59;
`;

export const DelBtn = styled.button`
  margin-left: auto;
  grid-column: 3;
  grid-row: 3;
  overflow: hidden;

  @media screen and (min-width: 834px) {
    grid-column: 9;
    grid-row: 2;
    width: 24px;
    height: 24px;
  }
  @media screen and (min-width: 1440px) {
    grid-column: 12;
  }

  svg {
    stroke: #000;
    scale: 2;
  }
`;

export const BuyBtn = styled.button`
  grid-column: 1 / span 3;
  grid-row: 5;

  @media screen and (min-width: 834px) {
    grid-column: 4 / span 5;
    grid-row: 4;
    align-self: flex-end;
  }
  @media screen and (min-width: 1440px) {
    grid-column: 10 / span 2;
  }
`;
