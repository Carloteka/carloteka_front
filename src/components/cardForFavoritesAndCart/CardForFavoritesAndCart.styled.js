import styled from 'styled-components';

export const Img = styled.img`
  margin-right: 8px;
  width: 60px;
  height: 82px;
  background-color: #dad4c8;

  @media screen and (min-width: 1440px) {
    margin-right: 32px;
    width: 304px;
    height: 336px;
  }
`;

export const Name = styled.h4`
  @media screen and (max-width: 1439px) {
    margin-right: 0;
    width: 101.5px;
    font-weight: 400;
    font-size: 13px;
    line-height: calc(20 / 13);
  }
  text-align: start;
  margin-right: 32px;
  width: 304px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const FlexContainer = styled.div`
  margin-right: 74px;
  display: flex;
  align-items: center;
  gap: 16px;
  width: 150px;
  color: #5b5b59;
  order: 2;

  @media screen and (max-width: 1439px) {
    margin-right: 0;
    gap: 4px;
    width: 100%;
    font-size: 16px;
    line-height: calc(19 / 16);
    order: 1;
  }

  & > ul {
    display: flex;
    gap: 4px;
    @media screen and (min-width: 1440px) {
      gap: 8px;
    }
  }
`;

export const Price = styled.p`
  width: 80px;
  text-align: start;
  color: #000;
  order: 1;

  @media screen and (max-width: 1439px) {
    margin: 22px 0 2px;
    text-align: end;
    font-size: 16px;
    line-height: calc(23 / 16);
    order: 2;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 32px;
    color: #101010;
  }
  &::first-letter {
    color: #5b5b59;
  }
`;

export const TotalPrice = styled.p`
  width: 120px;
  color: #000;
  order: 2;
  @media screen and (min-width: 1440px) {
    margin-right: 32px;
    color: #101010;
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

export const BuyBtnDesc = styled.button`
  @media screen and (max-width: 1439px) {
    display: none;
  }
  margin-right: 88px;
  width: 192px;
  order: 3;
`;

export const DelBtn = styled.button`
  width: 16px;
  height: 16px;
  order: 4;
`;

export const BuyBtn = styled.button`
  margin: 32px 0 0;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
