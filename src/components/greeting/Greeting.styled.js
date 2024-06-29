import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Box = styled.div`
  padding: 9px 16px 16px;
  min-width: 288px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  text-align: center;

  @media screen and (min-width: 834px) {
    padding: 56px 0;
    width: 768px;
    display: grid;
    grid-template-columns: repeat(9, 64px);
    grid-template-rows: auto auto auto 48px auto;
    row-gap: 0;
    column-gap: 24px;
    text-align: start;
  }
  @media screen and (min-width: 1440px) {
    padding: 71px 0;
    width: 1312px;
    grid-template-columns: repeat(12, 80px);
    column-gap: 32px;
  }
`;
export const Img = styled.picture`
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 834px) {
    grid-column: 6 / span 4;
    grid-row: 2 / span 4;

    justify-content: flex-start;

    & > img {
      width: 327px;
      height: 330px;
    }
  }

  @media screen and (min-width: 1440px) {
    grid-column: 7 / span 6;
    grid-row: 1 / span 5;

    & > img {
      width: 640px;
      height: 646px;
    }
  }
`;

export const Title = styled.h1`
  @media screen and (min-width: 834px) {
    grid-column: 1 / span 7;
    grid-row: 1;
    font-size: 55px;
    line-height: calc(63 / 55);
  }
  @media screen and (min-width: 1440px) {
    padding-top: 112px;
    width: 640px;
    grid-column: 1 / span 6;
    grid-row: 2;
  }
`;

export const Description = styled.p`
  margin: 0;
  width: 100%;
  color: #363535;
  font-size: 19px;
  font-weight: 500;
  line-height: 23px;

  @media screen and (min-width: 834px) {
    grid-column: 1 / span 5;
    grid-row: 3;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    margin: 56px 0 40px;
    grid-column: 1 / span 6;
  }
`;
export const Button = styled(Link)`
  position: relative;

  @media screen and (min-width: 834px) {
    grid-column: 1;
    grid-row: 4;
    width: 304px;
  }

  @media screen and (min-width: 1440px) {
  }

  svg {
    position: absolute;
    right: 24px;
    top: 16px;
    fill: white;
  }
`;
