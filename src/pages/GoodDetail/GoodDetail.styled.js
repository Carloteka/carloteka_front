import styled from 'styled-components';

export const SectionInfo = styled.section`
  margin-bottom: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 88px;
    flex-direction: row;
    gap: 32px;
  }

  & > div:first-child {
    width: 288px;
    height: 350px;

    @media screen and (min-width: 1440px) {
      width: 640px;
      height: 745px;
    }
  }
`;

export const SellDiv = styled.div`
  width: 100%;
  @media screen and (min-width: 1440px) {
    width: 488px;
  }

  & > div {
    margin-bottom: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;

    @media screen and (min-width: 1440px) {
      margin-bottom: 40px;
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
    @media screen and (min-width: 1440px) {
      text-align: left;
    }
  }
`;

export const Price = styled.p`
  margin: 16px 0 48px;
  @media screen and (min-width: 1440px) {
    margin: 16px 0 40px;
  }
`;

export const Material = styled.p`
  margin: 24px 0 40px;
`;

export const AddToCartBtn = styled.button`
  order: 5;

  @media screen and (min-width: 1440px) {
    width: 251px;
    order: 3;
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

  @media screen and (min-width: 1440px) {
    margin-bottom: 24px;
    flex-direction: row;
    gap: 14px;
  }

  .active {
    color: #cccbc7;
  }
`;
