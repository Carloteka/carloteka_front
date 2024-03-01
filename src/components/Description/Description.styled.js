import styled from 'styled-components';

export const SectionDescription = styled.section`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 32px;
  border-top: 1px solid #a7a5a3;
  padding-top: 40px;
  color: #000;

  @media screen and (min-width: 1440px) {
    flex-direction: row;

    & > div > div {
      width: 752px;
    }
  }
`;
