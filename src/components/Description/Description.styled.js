import styled from 'styled-components';

export const SectionDescription = styled.section`
  padding-top: 40px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 32px;
  border-top: 1px solid #a7a5a3;
  color: #000;

  @media screen and (min-width: 834px) {
    padding-top: 32px;
    flex-direction: row;
    gap: 24px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 40px;
    gap: 32px;
  }

  h4 {
    margin-bottom: 12px;
  }

  img {
    @media screen and (min-width: 834px) {
      width: 328px;
      height: 472px;
    }
    @media screen and (min-width: 1440px) {
      width: 528px;
      height: 528px;
    }
  }
`;
