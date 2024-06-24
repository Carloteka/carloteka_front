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

  & > h1 {
    padding: 16px 0;
    text-align: center;

    @media screen and (min-width: 834px) {
      padding: 32px 88px;
      text-align: left;
    }
    @media screen and (min-width: 1440px) {
      padding: 4px 112px 16px;
    }
  }
`;
