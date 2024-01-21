import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FavoritesList = styled.ul`
  padding: 0 0 32px;
  width: 100%;
  border-bottom: 1px solid #dad4c8;

  @media screen and (min-width: 1440px) {
    padding: 0 0 56px;
    border-bottom: none;
  }

  li {
    display: flex;
  }
`;

export const Card = styled.li`
  @media screen and (max-width: 1439px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  padding: 32px 0;
  align-items: center;
  border-bottom: 1px solid #dad4c8;
`;

export const Button = styled.button`
  margin-left: auto;

  @media screen and (min-width: 1440px) {
    width: 416px;
  }
`;

export const EmptyMessage = styled.div`
  margin: 24px auto 0;
  width: 100%;
  text-align: center;

  @media screen and (min-width: 1440px) {
    margin: 56px auto 0;
    width: 542px;
  }

  h2 {
    margin: 16px 0;
    @media screen and (min-width: 1440px) {
      margin: 32px 0;
    }
  }

  & > a {
    margin: 0 auto;
    height: 48px;
  }

  & > svg {
    fill: #101010;
    @media screen and (min-width: 1440px) {
      width: 248px;
      height: 248px;
    }
  }
`;

// unique cart styles

export const ListHeaderWrapper = styled.div`
  padding: 8px;
  width: 100%;
  display: none;
  background-color: #dad4c8;
  @media screen and (min-width: 1440px) {
    padding: 12px 24px 12px 112px;
    display: flex;
    text-align: start;
  }
`;

export const Name = styled.p`
  margin-right: 22px;

  @media screen and (min-width: 1440px) {
    margin-right: 508px;
  }
`;

export const Price = styled.p`
  margin-right: 20px;
  @media screen and (min-width: 1440px) {
    margin-right: 74px;
  }
`;

export const Quantity = styled.p`
  margin: 0 8px 0 0;

  @media screen and (min-width: 1440px) {
    width: 150px;
    margin: 0 79px 0 108px;
  }
`;

export const GoToCatalog = styled(Link)`
  margin: 0 0 16px 0;
  padding: 14.5px 24px;

  justify-content: flex-start;

  font-weight: 500;

  @media screen and (min-width: 1440px) {
    margin: 0;
    padding: 14.5px 24px;
    width: 415px;
  }

  & > svg {
    margin-right: 15px;
    fill: #2d3f24;
    transform: rotate(180deg);
    @media screen and (min-width: 1440px) {
      margin-right: 49px;
    }
  }
`;

export const FlexBox = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const FlexContainer = styled.div`
  margin: 32px auto 0;
  text-align: left;

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    margin: 112px auto 0;
  }
`;
export const CouponBox = styled.form`
  margin-bottom: 32px;
  width: 100%;
  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
    width: 528px;
  }

  h3 {
    font-size: 24px;
    line-height: calc(31 / 24);
  }

  & > label {
    margin: 16px 0;
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media screen and (min-width: 1440px) {
      margin: 40px 0 32px;
      gap: 16px;
    }
  }

  .secondaryBtn {
    width: 100%;
  }

  & input {
    padding: 0 0 0 13px;
    height: 50px;
    border: 1px solid #81807e;
    @media screen and (min-width: 1440px) {
      padding: 0 0 0 24px;
    }
  }
  & input::placeholder {
    color: #a7a5a3;
  }
`;
export const BuyBox = styled.div`
  width: 100%;
  @media screen and (min-width: 1440px) {
    width: 528px;
  }

  & > div {
    position: relative;
    margin-bottom: 24px;
    padding: 16px;
    height: 98px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: #f2f0ec;
    border: 1px solid #cccbc7;

    @media screen and (min-width: 1440px) {
      margin-bottom: 56px;
      padding: 32px;
      height: 136px;
    }
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      width: 88%;
      height: 1px;
      background-color: #a7a5a3;
    }
  }

  & > div > div {
    display: flex;
    justify-content: space-between;
    & > p:first-child {
      font-weight: 700;
      font-size: 15px;
      line-height: calc(21 / 15);

      @media screen and (min-width: 1440px) {
        font-size: 18px;
        line-height: calc(23 / 18);
      }
    }
  }
`;

export const GoToPayment = styled(Link)`
  justify-content: flex-end;
  font-weight: 500;

  @media screen and (min-width: 1440px) {
    padding: 14.5px 24px;
  }

  & > svg {
    margin-left: 20px;
    fill: white;
    @media screen and (min-width: 1440px) {
      margin-left: 135px;
    }
  }
`;
