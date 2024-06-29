import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #f2f0ec50;
  z-index: 28;
`;

export const MenuContainer = styled.div<{ $showCartMenu: boolean }>`
  padding: 130px 18px 180px;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  right: ${({ $showCartMenu }) => ($showCartMenu ? '0' : '-100%')};

  display: flex;
  flex-direction: column;

  background-color: white;
  z-index: 32;
  transition: right 0.5s ease-out;

  @media screen and (min-width: 834px) {
    padding: 112px 56px 151px;

    right: ${({ $showCartMenu }) => ($showCartMenu ? '0' : '-599px')};

    width: 599px;
  }

  a {
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

  @media screen and (min-width: 834px) {
    top: 56px;
    left: 56px;
  }
`;

export const Card = styled.li`
  display: flex;
  gap: 24px;
  width: 100%;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  button {
    margin-left: auto;
    width: 30px;
    height: 30px;
    align-self: center;
  }

  div {
    width: 282px;
  }

  @media screen and (max-width: 833px) {
    gap: 8px;
    font-size: 13px;
    line-height: calc(20 / 13);

    h4 {
      font-weight: 400;
      font-size: 13px;
      line-height: calc(20 / 13);
    }

    p:first-of-type {
      margin: 4px 0;
    }
  }
`;

export const Img = styled.img`
  width: 60px;
  height: 82px;
  background-color: #dad4c8;

  @media screen and (min-width: 834px) {
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
