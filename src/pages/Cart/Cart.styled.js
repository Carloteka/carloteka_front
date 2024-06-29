import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { gridStyles } from '../../gridStyles';

export const FavoritesList = styled.ul`
  margin-bottom: 32px;
  padding-bottom: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-bottom: 1px solid #dad4c8;

  @media screen and (min-width: 834px) {
    margin-bottom: 56px;
    padding-bottom: 56px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 46px;
    gap: 56px;
  }
`;

export const Card = styled.li`
  ${gridStyles};
  align-items: center;
  gap: 16px;

  & > span {
    grid-column: 1 / span 2;
    font-size: 16px;
    line-height: calc(23 / 16);
    color: #000;
    text-align: left;

    @media screen and (min-width: 834px) {
      display: none;
    }
  }

  & > div,
  & > p {
    @media screen and (max-width: 833px) {
      grid-column: 3 / span 2;
      text-align: right;
    }
  }
  & > div {
    margin: 0 0 0 auto;
    width: 103px;
    grid-row: 5;
    @media screen and (min-width: 834px) {
      margin: 0;
      grid-column: 6 / span 2;
      grid-row: 1;
    }
    @media screen and (min-width: 1440px) {
      grid-column: 9 / span 2;
    }
  }
`;

export const Button = styled.button`
  margin-left: auto;

  @media screen and (min-width: 834px) {
    width: 328px;
  }
  @media screen and (min-width: 1440px) {
    width: 303px;
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
  ${gridStyles};
  padding: 8px;
  width: 100%;
  display: none;
  background-color: #dad4c8;
  @media screen and (min-width: 834px) {
    margin-bottom: 24px;
    padding: 0;
    display: grid;
    align-items: center;
    text-align: start;
    height: 77px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 56px;
    height: 48px;
  }
`;

export const Name = styled.p`
  grid-column: 1 / span 3;
`;

export const Price = styled.p`
  grid-column: 4 / span 2;
  @media screen and (min-width: 1440px) {
    grid-column: 7 / span 2;
  }
`;

export const Quantity = styled.p`
  grid-column: 6 / span 2;
  @media screen and (min-width: 1440px) {
    grid-column: 9 / span 2;
  }
`;

export const Total = styled.p`
  grid-column: 8 / span 2;
  width: 116px;
  @media screen and (min-width: 1440px) {
    grid-column: 11 / span 2;
    width: auto;
  }
`;

export const GoToCatalog = styled(Link)`
  margin: 0 0 16px 0;
  padding: 14.5px 24px;

  @media screen and (min-width: 834px) {
    margin: 0;
    padding: 14.5px 24px;
    width: 328px;
  }
  @media screen and (min-width: 1440px) {
    width: 415px;
  }

  & > svg {
    margin-right: 15px;
    fill: 2D3F24;
    transform: rotate(180deg);

    @media screen and (min-width: 1440px) {
      margin-right: 49px;
    }
  }
  &:hover {
    svg {
      fill: white;
    }
  }
`;

export const FlexBox = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const FlexContainer = styled.div`
  margin: 32px auto 0;
  text-align: left;

  @media screen and (min-width: 834px) {
    margin: 64px auto 0;
    display: flex;
    justify-content: space-between;
  }
  @media screen and (min-width: 1440px) {
    margin: 112px auto 0;
  }
`;
export const CouponBox = styled.form`
  margin-bottom: 32px;
  width: 100%;
  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
    width: 328px;
  }
  @media screen and (min-width: 1440px) {
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

    @media screen and (min-width: 834px) {
      margin: 24px 0px;
      gap: 16px;
    }
    @media screen and (min-width: 1440px) {
      margin: 40px 0 32px;
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
  @media screen and (min-width: 834px) {
    width: 328px;
  }
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

    @media screen and (min-width: 834px) {
      margin-bottom: 32px;
      padding: 24px;
      height: 130px;
    }
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

      @media screen and (min-width: 834px) {
        font-size: 18px;
        line-height: calc(23 / 18);
      }
    }
  }
`;

export const GoToPayment = styled(Link)`
  padding-right: 48px;
  font-weight: 500;

  & > svg {
    position: absolute;
    right: 24px;
    fill: white;
  }
`;
