import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f0ec50;
  z-index: 0;
`;

export const MenuContainer = styled.div`
  padding: 130px 18px 180px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;

  display: flex;
  flex-direction: column;

  background-color: white;
  z-index: 2;
  @media screen and (min-width: 1440px) {
    padding: 112px 56px 151px;
    width: 599px;
    min-height: 1024px;
  }

  a:last-child {
    margin-top: 32px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 65px;
  left: 16px;

  svg {
    stroke: #101010;
  }

  @media screen and (min-width: 1440px) {
    top: 56px;
    left: 56px;
  }
`;

export const Card = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  button {
    width: 30px;
    height: 30px;
    align-self: center;
  }

  div {
    width: 282px;
  }
`;

export const Img = styled.img`
  background-color: #dad4c8;

  @media screen and (min-width: 1440px) {
    width: 127px;
    height: 158px;
  }
`;

export const Price = styled.p`
  margin: 16px 0;
`;

export const Total = styled.div`
  margin-top: 56px;
  margin-bottom: auto;

  display: flex;
  justify-content: space-between;

  font-size: 18px;
  font-weight: 700;
  line-height: calc(23 / 18);
`;
