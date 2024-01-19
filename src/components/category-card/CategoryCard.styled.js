import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  @media screen and (min-width: 1440px) {
    width: 640px;
    gap: 32px;
  }

  & > div {
    display: block;
    @media screen and (min-width: 1440px) {
      display: none;
    }
  }

  & > p {
    color: #363535;
  }

  & > li {
    display: flex;
  }
`;

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

  @media screen and (min-width: 1440px) {
    padding: 0 32px 4px 0;
    &:after {
      width: 192px;
      left: 0;
      transform: translateX(0%);
    }
  }
`;

export const LinkBtn = styled(Link)`
  padding: 13.5px 24px;
  font-size: 19px;
  font-weight: 500;
  line-height: 1;

  @media screen and (min-width: 1440px) {
    width: 304px;
  }
`;
