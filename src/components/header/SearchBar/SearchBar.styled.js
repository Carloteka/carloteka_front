import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchBox = styled.div`
  position: relative;
  margin-right: 0;
  width: 100%;
  display: flex;

  @media screen and (min-width: 834px) {
    width: auto;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 134px;
  }

  search {
    z-index: 10;
    min-width: 208px;
    width: 100%;
    @media screen and (min-width: 834px) {
      width: 370px;
    }
    @media screen and (min-width: 1440px) {
      width: 500px;
    }
  }
`;

export const Form = styled.form`
  padding: 8px;
  height: 41px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 834px) {
    padding: 0 16px;
    height: 57px;
  }

  svg {
    @media screen and (min-width: 834px) {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Input = styled.input`
  padding: 0;
  width: 176px;
  width: 92%;
  border: none;
  border-radius: 0;
  background-color: inherit;
  color: #101010;
  text-indent: 0px;

  @media screen and (min-width: 1440px) {
    padding-right: 16px;
    width: 450px;
  }

  &::placeholder {
    font-size: 24px;
    line-height: calc(25 / 24);
    letter-spacing: -0.06rem;
  }

  &:focus {
    outline: none;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  z-index: 0;
`;

export const SearchResultDiv = styled.div`
  position: absolute;
  top: 28px;
  left: -33%;
  width: 170%;
  background-color: white;
  z-index: 11;

  @media screen and (min-width: 1440px) {
    width: 100%;
    top: 38px;
    left: 0;
  }

  p:first-child {
    text-align: center;
    padding: 40px 0;
  }

  div:first-of-type {
    padding: 12px 10px;
  }

  li {
    color: #101010;
    a {
      margin: auto auto auto 8px;
      padding: 9px 0;
      width: 251px;
      height: 56px;
      justify-content: flex-start;
      color: inherit;
      word-wrap: break-word;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    li {
      display: flex;
      align-items: center;
      padding: 2px 16px;
      height: 56px;
    }
  }

  img {
    height: 56px;
    object-fit: cover;
  }

  h4 {
    padding: 4px 16px 5px;
  }
`;

export const GoodListResult = styled.li`
  h4 {
    border-bottom: 0.5px solid #cccbc7;
  }
  li {
    border-bottom: 0.5px solid #cccbc7;
    justify-content: space-between;
    width: 100%;
    a {
      padding-right: 4px;
      width: 160px;
      font-size: 13px;
      overflow-y: hidden;
      @media screen and (min-width: 1440px) {
        font-size: 18px;
        width: 220px;
      }
    }
  }

  span {
    text-align: right;
    text-wrap: nowrap;
    @media screen and (max-width: 1439px) {
      font-size: 13px;
    }
  }
`;

export const Button = styled(Link)`
  padding: 10px 24px;
  justify-content: center;
  font-size: 19px;
  line-height: 1;
  font-weight: 500;
`;
