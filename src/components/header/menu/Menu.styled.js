import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuContainer = styled.div`
  padding: 120px 16px 120px;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: white;
  z-index: 2;
  @media screen and (min-width: 1440px) {
    padding: 112px;
    gap: 72px;
    width: 592px;
    min-height: 1024px;
  }
  a {
    justify-content: flex-start;
  }

  @media screen and (max-width: 1439px) {
    h3 {
      font-size: 24px;
      line-height: calc(31 / 24);
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 56px;
  right: 16px;
  width: 24px;
  height: 24px;

  svg {
    width: 16px;
    height: 16px;
    stroke: #101010;
    @media screen and (min-width: 1440px) {
      width: 24px;
      height: 24px;
    }
  }

  @media screen and (min-width: 1440px) {
    left: 56px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const FlexCatalogContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  cursor: pointer;

  svg {
    padding: 5px 4px;
    fill: #101010;
  }
`;

export const CategoriesList = styled.ul`
  padding: 16px 16px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  li {
    @media screen and (min-width: 1440px) {
      width: 352px;
    }
  }
`;
export const LinkLarge = styled(Link)`
  font-size: 24px;
  font-weight: 700;
  line-height: calc(31 / 24);
`;

export const Contacts = styled.div`
  h3 {
    margin-bottom: 10px;
  }
  li {
    margin-bottom: 9px;
  }
`;

export const Tel = styled.li`
  margin-bottom: 13px;
  color: #2d3f24;
  a {
    font-weight: 400;
    font-size: 18px;
    line-height: calc(25 / 18);
    color: #2d3f24;
  }
`;

export const Socials = styled.ul`
  display: flex;
  gap: 16px;
  height: 24px;

  svg {
    fill: #2d3f24;
  }
`;
