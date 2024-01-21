import styled from 'styled-components';

export const IncrementBox = styled.div`
  margin: 0 120px 0 108px;
  width: 119px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 18px;
  }

  & button:first-child {
    letter-spacing: -0.2em;
  }
  button {
    font-weight: 500;
    font-size: 18px;

    @media screen and (min-width: 1440px) {
      font-weight: 400;
    }
  }
`;
