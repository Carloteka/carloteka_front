import styled from 'styled-components';

export const Wrapper = styled.footer`
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 32px;
  background-color: #2d3f24;
  color: white;

  @media screen and (min-width: 834px) {
    padding: 80px 32px;
    flex-direction: row;
    gap: 34px;
  }
  @media screen and (min-width: 1440px) {
    padding: 57px 163px;
    justify-content: space-between;
    gap: 222px;
  }

  div:first-child {
    width: 226px;
  }
  div:nth-child(2) {
    width: 246px;

    @media screen and (min-width: 834px) {
      width: 216px;
    }
    @media screen and (min-width: 1440px) {
      width: 221px;
    }
  }
  div:last-child {
    width: 246px;

    @media screen and (min-width: 834px) {
      width: 263px;
    }
    @media screen and (min-width: 1440px) {
      width: 158px;
    }
  }

  h3 {
    margin-bottom: 24px;

    @media screen and (min-width: 834px) {
      margin-bottom: 16px;
    }
    @media screen and (min-width: 1440px) {
      margin-bottom: 32px;
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

  @media screen and (min-width: 1440px) {
    gap: 24px;
  }
`;

export const WorkTime = styled.p`
  width: 236px;
`;

export const Socials = styled.ul`
  display: flex;
  gap: 16px;
  height: 24px;

  @media screen and (min-width: 1440px) {
    padding-left: 34px;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
