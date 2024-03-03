import styled from 'styled-components';

export const Wrapper = styled.footer`
  padding: 46px 16px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  background-color: #2d3f24;
  color: white;

  @media screen and (min-width: 834px) {
    padding: 56px 33px 31px;
    flex-direction: row;
    gap: 34px;
  }
  @media screen and (min-width: 1440px) {
    padding: 80px;
    gap: 222px;
  }

  div:first-child {
    width: 226px;
  }
  div:nth-child(2) {
    @media screen and (min-width: 834px) {
      width: 216px;
    }
  }
  div:last-child {
    width: 263px;
  }

  h3 {
    margin-bottom: 16px;

    @media screen and (min-width: 1440px) {
      margin-bottom: 24px;
    }
  }

  li {
    display: flex;
    gap: 8px;
  }

  svg {
    fill: white;
    min-width: 20px;
    width: 20px;
    height: 20px;
  }
  a {
    color: inherit;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & .littleText {
    font-size: 18px;
    line-height: calc(25 / 18);
  }
`;

export const Socials = styled.ul`
  display: flex;
  gap: 16px;
  height: 24px;

  svg {
    width: 20px;
    height: 20px;
  }
`;
