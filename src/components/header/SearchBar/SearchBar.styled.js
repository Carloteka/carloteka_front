import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Search = styled.form`
  @media screen and (max-width: 1439px) {
    order: 2;
    margin-right: 0;
    padding: 0 0 0 16px;
    width: 100%;
    height: 25px;
    justify-content: space-between;
  }
  margin-right: 142px;
  padding: 0 16px;
  position: relative;
  height: 32px;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 0;
  width: 240px;
  border: none;
  border-radius: 0;
  background-color: inherit;
  color: #101010;
  text-indent: 0px;
  @media screen and (min-width: 1440px) {
    padding: 0 16px 0;
    width: 366px;
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
  left: 0;
  width: 100%;
  align-items: center;
  background-color: white;
  @media screen and (min-width: 1440px) {
    top: 38px;
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
    a {
      width: 160px;
      @media screen and (min-width: 1440px) {
        width: 220px;
      }
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
