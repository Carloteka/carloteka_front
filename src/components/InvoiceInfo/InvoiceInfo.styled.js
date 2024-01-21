import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const InfoBox = styled.div`
  margin-bottom: 0;
  padding: 16px;
  width: 100%;
  background-color: #dad4c8;

  @media screen and (min-width: 1440px) {
    margin-bottom: 24px;
    padding: 31px 30.5px 19px;
    width: 528px;
  }

  h3:first-child {
    margin: 0 0 16px 0;
    @media screen and (min-width: 1440px) {
      margin: 0 0 24px 0;
    }
  }

  h3 {
    margin: 32px 0 24px;
  }

  h4:last-child {
    width: auto;

    @media screen and (min-width: 1440px) {
      width: 97px;
    }
  }

  ul {
    margin-top: 16px;
  }

  li {
    padding: 16px 0;
    min-height: 57px;
    border-top: 1px solid #a7a5a3;
    border-bottom: 1px solid #a7a5a3;

    p:first-child {
      padding-right: 16px;
    }

    p:last-child {
      white-space: nowrap;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  & > p:last-child {
    margin-top: 1em;
  }
`;

export const DeliveryPrice = styled.div`
  padding: 16px 0;
  min-height: 57px;
  border-bottom: 1px solid #a7a5a3;
`;

export const Total = styled.div`
  margin-top: 24px;
  // height: 35px;
  font-weight: 700;
  font-size: 18px;
  line-height: calc(23 / 18);
`;

export const PolicyLink = styled(Link)`
  display: inline;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;
