import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 304px;
  background-color: #dad4c8;
  order: 2;

  @media screen and (min-width: 1440px) {
    margin-right: 32px;
    width: 304px;
    height: 336px;
  }
`;

export const Name = styled.h4`
  margin-right: 0;
  width: 100%;
  text-align: start;
  order: 2;

  @media screen and (min-width: 1440px) {
    margin-right: 32px;
    width: 304px;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  color: #000;
  order: 2;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    width: auto;
  }

  & > p:first-child {
    font-size: 16px;
    line-height: calc(23 / 16);

    @media screen and (min-width: 1440px) {
      display: none;
    }
  }

  @media screen and (max-width: 1439px) {
    & > div {
      margin: 0;
      width: 103px;
    }
  }
`;

export const Price = styled.p`
  width: 80px;
  text-align: start;
  color: #000;

  @media screen and (max-width: 1439px) {
    margin: 22px 0 2px;
    text-align: end;
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
  color: #000;

  @media screen and (min-width: 1440px) {
    margin-right: 32px;
    width: 120px;
    color: #101010;
  }
  &::first-letter {
    color: #5b5b59;
  }
`;

export const DelBtn = styled.button`
  width: 16px;
  height: 16px;
  order: 1;
  align-self: end;

  @media screen and (min-width: 1440px) {
    align-self: center;
    order: 4;
  }

  svg {
    stroke: #000;
  }
`;
