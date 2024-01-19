import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DeliveryBox = styled.section`
  position: relative;
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items;
  
  button {
   height: 48px;
  };

  & > div {position: relative;};

  & > div > span {
    margin:40px 0;
    display:flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
  font-size: 18px;
  line-height: calc(23 / 18);

  &::before,&::after  {
    content:'';
    position:absolute;
    width:336px;
    height:1px;
    background-color:#A7A5A3;
  }
&::before {
    left:0;
}
&::after {
    right:0;}
}
`;

export const GoToDelivery = styled(Link)`
  margin-bottom: 56px;
  padding: 0 24px;
  width: 528px;
  justify-content: flex-start;
  gap: 10px;
  font-size: 19px;
  line-height: 1;
  font-weight: 500;

  svg {
    transform: rotate(180deg);
  }

  p {
    width: 100%;
    text-align: center;
  }
`;

export const Form = styled.form`
  width: 752px;

  h2 {
    margin-bottom: 40px;
  }

  h3 {
    margin: 56px 0 40px;
  }

  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .short {
    width: 368px;
  }

  input {
    padding: 16px;
    width: 100%;
    height: 50px;
    border: 1px solid #a7a5a3;
  }
`;

export const RelativeDiv = styled.div`
  position: relative;
  width: 100%;

  img {
    position: absolute;
    bottom: 17px;
    right: 16px;
  }
`;

export const PaymentMethodDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    width: 364px;
    border: 1px solid #a7a5a3;
    background-color: inherit;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 32px;
`;

export const SuccessBox = styled.div`
  padding: 112px;
  border: 1px solid #dad4c8;

  h2 {
    margin-bottom: 64px;
    text-align: center;
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
  width: 528px;

  span {
    font-weight: 700;
    font-size: 18px;
    line-height: calc(23 / 18);
  }

  ul {
    margin: 16px 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  & > div:last-child {
    margin-top: 24px;
  }
`;
export const DeliveryInfoDiv = styled.div`
  width: 448px;

  p:last-child {
    margin-top: 1em;
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
