import styled from 'styled-components';

export const SectionInfo = styled.section`
  margin-bottom: 56px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 22px;

  & .btn_left,
  & .btn_right {
    border-radius: 0;
    height: 27px;

    svg {
      width: 6px;
      height: 9px;
    }
  }

  @media screen and (min-width: 834px) {
    margin-bottom: 88px;
    flex-direction: row;
    column-gap: 24px;

    & .btn_left {
      left: 0px;
    }
    & .btn_right {
      right: 0px;
    }
    & .btn_left,
    & .btn_right {
      width: 23px;
      height: 28px;
    }
  }
  @media screen and (min-width: 1440px) {
    column-gap: 32px;

    & .btn_left,
    & .btn_right {
      width: 44px;
      height: 55px;
      svg {
        width: 11px;
        height: 17px;
      }
    }
  }

  & > div:first-child {
    min-width: 288px;
    min-height: 350px;

    @media screen and (min-width: 834px) {
      min-width: 328px;
      min-height: 379px;
    }
    @media screen and (min-width: 1440px) {
      min-width: 640px;
      min-height: 745px;
    }
  }
`;

export const SellDiv = styled.div`
  width: 100%;
  @media screen and (min-width: 1440px) {
    width: 488px;
  }

  & > div {
    margin-bottom: 3px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;

    @media screen and (min-width: 834px) {
      margin-bottom: 32px;
    }
  }

  & > div > div {
    margin: 0;
    padding: 12px 16px;
    width: 155px;
    height: 48px;
    border: 1px solid #81807e;

    span {
      font-weight: 400;
      line-height: calc(25 / 18);
    }
  }

  span {
    font-size: 18px;
    font-weight: 700;
    line-height: calc(23 / 18);
  }

  a {
    order: 5;
  }

  p {
    text-align: left;
  }

  p:first-of-type {
    text-align: center;
    @media screen and (min-width: 834px) {
      text-align: left;
    }
  }
`;

export const Price = styled.p`
  margin: 16px 0 48px;
  @media screen and (min-width: 834px) {
    margin: 32px 0;
  }
`;

export const Material = styled.p`
  margin: 24px 0 15px;
  @media screen and (min-width: 834px) {
    margin: 32px 0;
  }
`;

export const AddToCartBtn = styled.button`
  order: 5;

  @media screen and (min-width: 834px) {
    width: 152px;
    order: 3;
  }
  @media screen and (min-width: 1440px) {
    width: 251px;
  }
`;
export const AddToFavoriteBtn = styled.button`
  width: 50px;
  height: 48px;
  border: 1px solid #81807e;
  color: #2d3f24;
  order: 4;
`;

export const AdditionalNavigation = styled.ul`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 834px) {
    margin-bottom: 32px;
    flex-direction: row;
    gap: 14px;
  }

  .active {
    color: #cccbc7;
  }
`;
