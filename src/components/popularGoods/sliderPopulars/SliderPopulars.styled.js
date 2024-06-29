import styled from 'styled-components';

export const SliderContainer = styled.div`
  position: relative;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn_left {
    left: 4px;
    @media screen and (min-width: 834px) {
      left: 8px;
    }
    @media screen and (min-width: 1440px) {
      left: 4px;
    }
  }
  .btn_right {
    right: 4px;
    @media screen and (min-width: 834px) {
      right: 8px;
    }
    @media screen and (min-width: 1440px) {
      right: 4px;
    }
  }
`;

export const ChevronIcon = styled.svg``;

export const Chevron = styled.button`
  position: absolute;
  top: 134px;
  z-index: 1;
  width: 30px;
  height: 36px;
  background: #f2f0ec;
  border-radius: 5px;

  @media screen and (min-width: 834px) {
    width: 28px;
  }
  @media screen and (min-width: 1440px) {
    width: 32px;
  }
`;

export const Slider = styled.ul`
  display: flex;
  gap: 32px;

  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: row;
    column-gap: 24px;
    overflow: hidden;
  }
  @media screen and (min-width: 1440px) {
    width: 1312px;
    column-gap: 32px;
  }

  & > li {
    display: flex;
    flex-direction: column;
    width: 288px;

    @media screen and (min-width: 834px) {
      min-width: 240px;
    }
    @media screen and (min-width: 1440px) {
      width: 304px;
      height: 456px;
      gap: 0px;
    }
  }
`;
