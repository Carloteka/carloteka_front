import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { visuallyHidden } from 'src/visuallyHiddenStyle';

export const HeaderContainer = styled.header`
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 73px;
  background-color: #dad4c8;
  z-index: 20;

  @media screen and (min-width: 834px) {
    padding: 0 32px;
    height: 96px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 64px;
    height: 112px;
  }
`;

export const LimiterConatiner = styled.div`
  margin: 0 auto;
  min-width: 288px;
  height: 100%;
  display: flex;
  align-content: space-between;
  align-items: center;
  justify-content: space-between;
  gap: 5px;

  @media screen and (min-width: 834px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1312px;
  }
`;

export const Logo = styled(Link)`
  margin-right: 0;
  background: #2d3f24;
  min-width: 34px;
  max-width: 34px;
  height: 34px;
  color: #dad4c8;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 10px;
  line-height: calc(14 / 10);
  letter-spacing: 0;

  @media screen and (min-width: 834px) {
    min-width: 64px;
    max-width: 64px;
    height: 64px;
    font-size: 13px;
    line-height: calc(20 / 13);
    text-wrap: nowrap;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 182px;
    min-width: 80px;
    height: 80px;
    word-spacing: -4px;
    font-size: 14px;
    line-height: calc(21 / 14);
  }
  &:visited {
    color: #dad4c8;
  }
`;

export const Catalog = styled(NavLink)`
  @media screen and (max-width: 833px) {
    ${visuallyHidden};
  }
  color: #101010;
  @media screen and (min-width: 834px) {
    margin-right: 0;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 80px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  button {
    @media screen and (max-width: 833px) {
      width: 16px;
      height: 16px;
    }
    @media screen and (min-width: 1440px) {
      width: 40px;
      height: 40px;
    }
  }

  svg {
    fill: #101010;
  }

  @media screen and (min-width: 834px) {
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    justify-content: flex-end;
    gap: 116px;
    width: 368px;
  }
`;

export const NavigationLink = styled(NavLink)`
  position: relative;

  @media screen and (min-width: 1440px) {
    width: 40px;
    height: 40px;
  }

  @media screen and (max-width: 833px) {
    ${visuallyHidden};
  }
`;

export const BurgerMenuBtn = styled.button`
  @media screen and (max-width: 833px) {
    justify-content: flex-end;

    svg {
      width: 12px;
      height: 8px;
    }
  }
`;

export const CartMenuBtn = styled.button`
  position: relative;
`;

export const Counter = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -14px;
  right: -2px;
  width: 14px;
  height: 14px;
  font-weight: 400;
  font-size: 10px;
  line-height: calc(14 / 10);
  border-radius: 50%;
  color: #f2f0ec;
  background-color: #2d3f24;

  @media screen and (min-width: 1440px) {
    top: -10px;
    right: -20px;
    width: 25px;
    height: 25px;
    font-weight: 400;
    font-size: 13px;
    line-height: calc(20 / 13);
  }
`;
