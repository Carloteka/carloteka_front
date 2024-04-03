import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 73px;
  width: 100%;
  min-height: 185px;
  display: flex;
  justify-content: center;
  background-color: #dad4c8;

  @media screen and (min-width: 834px) {
    padding-top: 96px;
    min-height: 219px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 112px;
    min-height: 184px;
  }
`;

export const BreadCrumbs = styled.ul`
  padding: 10px 16px;
  min-width: 320px;
  display: flex;
  text-align: center;

  @media screen and (min-width: 834px) {
    padding: 0 121px;
    width: 834px;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    padding: 9px 64px 0;
    width: 1440px;
    font-weight: 400;
    font-size: 23px;
    line-height: calc(27 / 23);
  }

  & > li {
    display: flex;
    &:not(:last-child)::after {
      content: '>';
      padding: 0 16px;
      width: 40px;
      height: 24px;
    }

    & > a {
      display: inline;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  & .disabled {
    pointer-events: none;
    cursor: not-allowed;

    &:hover {
      text-decoration: none;
    }
  }
`;
