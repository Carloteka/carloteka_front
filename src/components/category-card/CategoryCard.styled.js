import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
  position: relative;
  padding: 0 0 8px 0;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    background: #dad4c8;
    width: 91px;
    height: 2px;
  }

  @media screen and (min-width: 834px) {
    padding: 0 0 8px 0;
    &:after {
      width: 192px;
      left: 0;
      transform: translateX(0%);
    }
  }
  @media screen and (min-width: 1440px) {
    padding: 0 0 4px 0;
  }
`;

export const LinkBtn = styled(Link)`
  padding: 13.5px 24px;
  font-size: 19px;
  font-weight: 500;
  line-height: 1;

  @media screen and (min-width: 834px) {
    width: 328px;
  }
  @media screen and (min-width: 1440px) {
    width: 304px;
  }
`;
