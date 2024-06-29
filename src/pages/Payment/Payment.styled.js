import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DeliveryBox = styled.section`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  gap: 32px;
  justify-content: center;
  text-align: left;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }

  button {
    height: 48px;
  }

  & > div {
    position: relative;
  }

  & > div > span {
    margin: 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 15px;
    line-height: calc(21 / 15);

    @media screen and (min-width: 1440px) {
      font-size: 18px;
      line-height: calc(23 / 18);
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 117px;
      width: 41%;
      height: 1px;
      background-color: #a7a5a3;

      @media screen and (min-width: 1440px) {
        width: 336px;
        width: 45%;
      }
    }
    &::before {
      left: 0;
    }
    &::after {
      right: 0;
    }
  }
`;

export const GoToDelivery = styled(Link)`
  margin-bottom: 24px;
  padding: 0 24px;
  width: 100%;
  justify-content: flex-start;
  gap: 10px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 56px;
    width: 528px;
  }

  svg {
    transform: rotate(180deg);
  }

  p {
    width: 214px;
    text-align: center;
    @media screen and (min-width: 1440px) {
      width: 100%;
    }
  }
`;

export const Form = styled.form`
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 752px;
  }

  h2 {
    margin-bottom: 24px;

    @media screen and (min-width: 1440px) {
      margin-bottom: 40px;
    }
  }

  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .short {
    width: 100%;

    @media screen and (min-width: 1440px) {
      width: 368px;
    }
  }

  input {
    padding: 8px;
    width: 100%;
    height: 50px;
    border: 1px solid #a7a5a3;

    @media screen and (min-width: 1440px) {
      padding: 16px;
    }
  }
`;

export const RelativeDiv = styled.div`
  position: relative;
  width: 100%;

  img {
    position: absolute;
    bottom: 17px;
    right: 8px;

    @media screen and (min-width: 1440px) {
      right: 16px;
    }
  }
`;

export const PaymentMethodDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;

  @media screen and (max-width: 1439px) {
    flex-direction: column;
  }

  button {
    width: 100%;
    border: 1px solid #a7a5a3;
    background-color: inherit;

    @media screen and (min-width: 1440px) {
      width: 364px;
    }
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 16px;

  @media screen and (min-width: 1440px) {
    row-gap: 32px;
  }

  button {
    margin: 16px 0 0;
    @media screen and (min-width: 1440px) {
      margin: 0;
    }
  }
`;

export const SuccessBox = styled.div`
  text-align: left;

  @media screen and (min-width: 1440px) {
    padding: 112px;
    border: 1px solid #dad4c8;
  }

  @media screen and (max-width: 1439px) {
    & > div {
      flex-direction: column;
      gap: 32px;
    }
  }

  h2 {
    margin-bottom: 32px;
    text-align: center;
    @media screen and (min-width: 1440px) {
      margin-bottom: 64px;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  & > div > div {
    justify-content: normal;
    flex-direction: column;
  }

  h3 {
    margin-bottom: 24px;
  }
`;

export const OrderInfoDiv = styled.div`
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 528px;
  }

  span {
    font-weight: 700;
    font-size: 15px;
    line-height: calc(21 / 15);

    @media screen and (min-width: 1440px) {
      font-size: 18px;
      line-height: calc(23 / 18);
    }
  }

  ul {
    margin: 8px 0;
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media screen and (min-width: 1440px) {
      margin: 16px 0;
      gap: 16px;
    }
  }

  & > div:last-child {
    margin-top: 16px;

    @media screen and (min-width: 1440px) {
      margin-top: 24px;
    }
  }
`;
export const DeliveryInfoDiv = styled.div`
  @media screen and (min-width: 1440px) {
    width: 448px;
  }

  p:last-child {
    margin-top: 8px;

    @media screen and (min-width: 1440px) {
      margin-top: 1em;
    }
  }
`;

export const DivBorderBottom = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid #cccbc7;
`;

// --------------  modal  =----------------

export const HeaderDiv = styled.div`
  padding: 20px 24px;
  height: 64px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #cccbc7;

  button {
    margin-left: auto;
    width: 24px;
    height: 24px;

    svg {
      fill: #101010;
      stroke: #101010;
    }
  }
`;

export const ModalMain = styled.div`
  padding: 0 56px;

  form {
    div {margin-bottom:56px; padding:0 1px 0 3px; display: flex; justify-content: space-between;}

    label {
      width: 1073px;
      display: flex;
      gap: 27px;

      input {width:18px, height:18px}
    }

svg {padding: 6px 8px;
border: 2px solid black;
border-radius:50%}

    button {
      width: 390px;
      height: 48px;
      margin-left: auto;
    }
  }
`;
export const UserDiv = styled.div`
  height: 162px;
  display: flex;
  align-items: center;
  gap: 32px;

  img {
    border-radius: 50%;
  }

  p:first-child {
    margin-bottom: 32px;
  }
`;
export const CardDiv = styled.div`
  margin-bottom: 40px;
  padding: 40px 0;
  height: 105px;
  display: flex;
  align-items: center;
  gap: 32px;
  border-bottom: 1px solid #cccbc7;
  border-top: 1px solid #cccbc7;
  overflow: hidden;

  img {
    height: 16px;
  }
`;
