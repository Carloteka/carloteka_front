import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
  }
`;

export const ShowFiltersBtn = styled.button`
  display: flex;
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const Aside = styled.aside`
  display: ${({ $show }) => ($show ? 'block' : 'none')};
  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: left;

  @media screen and (min-width: 1440px) {
    width: 304px;
    gap: 40px;
  }

  fieldset {
    display: block;
  }

  fieldset:nth-child(even) {
    padding-bottom: 24px;
    border-bottom: 1px solid grey;
    @media screen and (min-width: 1440px) {
      padding-bottom: 40px;
    }

    legend {
      padding-top: 24px;
      width: 100%;
      border-top: 1px solid #a7a5a3;
      @media screen and (min-width: 1440px) {
        padding-top: 40px;
      }
    }
  }

  legend {
    margin-bottom: 24px;
    @media screen and (min-width: 1440px) {
      margin-bottom: 40px;
    }
  }

  label {
    margin-bottom: 16px;
    padding: 0 3px;
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    min-height: 25px;
    cursor: pointer;
  }
  label:lastchild {
    margin-bottom: 0;
  }
  input {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`;

export const Checkbox = styled.input`
  cursor: pointer;
`;

export const Price = styled.fieldset`
  div {
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: 24px;
  }

  div:last-child > label::before {
    content: '₴';
    position: absolute;
    left: 8px;
    color: #5b5b59;
  }

  label {
    padding: 0;
    position: relative;
    text-indent: 0px;
  }

  #price-range {
    margin: 16px 0;
    padding: 0;
    justify-content: center;
    height: 28px;

    & > div {
      gap: 0;
    }
    & .bar {
      height: 4px;
      box-shadow: none;
    }

    & .bar-left {
      padding: 0;
      box-shadow: none;
    }
    & .bar-right {
      padding: 0;
      box-shadow: none;
    }
    .caption {
      display: none;
    }
    .thumb::before {
      margin: -11px 0;
      width: 28px;
      height: 28px;
      box-shadow: none;
    }
    .thumb-right::before {
      right: 0;
      width: 28px;
      height: 28px;
      box-shadow: none;
    }
  }

  input {
    width: 100%;
    height: 32px;
    text-align: right;
    border: 1px solid #cccbc7;
  }
`;

export const TagsContainer = styled.div`
  margin-bottom: 16px;
  padding-right: 0;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  order: 2;

  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
    padding-right: 148px;
    order: 1;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    column-gap: 24px;
    row-gap: 16px;
  }

  li {
    padding: 4px;
    height: 40px;
    display: flex;
    align-items: center;
    gap: 4px;
    background-color: #f2f0ec;

    @media screen and (min-width: 1440px) {
      padding: 7.5px 8px;
      height: auto;
      gap: 8px;
    }
  }

  button {
    width: 24px;
    height: 24px;
  }

  svg {
    stroke: #101010;
    cursor: pointer;
  }

  li > label {
    display: none;
  }

  ul > li:last-child {
    background-color: inherit;

    p {
      display: none;
    }
    svg {
      display: none;
    }
    label {
      // position: absolute;
      // top: 50%;
      // right: 0;
      display: flex;
      height: 23px;
      cursor: pointer;
      font-weight: 500;
      font-size: 19px;
      line-height: calc(23 / 19);
      color: #000;
    }
  }
`;

export const FlexDiv = styled.div`
  margin-bottom: 40px;
  display: inline-flex;
  text-align: left;
  order: 2;

  @media screen and (max-width: 1439px) {
    order: 1;
    margin-bottom: 16px;
    & > span {
      display: none;
    }
  }
`;

export const GoodsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  order: 3;

  @media screen and (min-width: 1440px) {
    gap: 32px;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
    width: 288px;
    // min-height: 440px;
    @media screen and (min-width: 1440px) {
      width: 304px;
      // min-height: 456px;
      gap: 0px;
    }
  }
`;

export const SelectBox = styled.div`
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
  position: relative;
  min-height: 25px;

  svg {
    position: absolute;
    top: 6.6px;
    right: 8px;
    transform: rotate(-90deg);
    cursor: pointer;
    pointer-events: none;
  }
  & > p {
    padding-right: 48px;
    min-height: 25px;
    font-weight: 700;
    font-size: 15px;
    line-height: calc(21 / 15);
    cursor: pointer;

    @media screen and (min-width: 1440px) {
      font-size: 18px;
      line-height: calc(23 / 18);
    }
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 0;
`;
export const Menu = styled.ul`
  display: block;
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 1;
  border: 1px solid #a7a5a3;
  box-shadow: 1px 1px 7px 0 #dad4c870;
  transition: visibility 0.75s;
  visibility: ${({ $show }) => ($show ? `visible` : `hidden`)};

  svg {
    position: static;
  }
`;

export const CheckedIcon = styled.svg`
  margin-right: 16px;
  padding: 6px 5px;
  background-color: #2d3f24;
  fill: #2d3f24;
  display: none;
  transition:
    fill 0.75s,
    width 0.15s,
    padding 0.15s,
    margin-right 0.15s;
  ${({ checked }) =>
    checked &&
    `fill:white; display:block; width:24px; padding:6px 5px; margin-right:16px; animation: 0.3s linear 0s 1 alternate move`};

  @keyframes move {
    from {
      width: 0;
    }
    to {
      width: 24px;
    }
  }
`;

export const SelectItem = styled.li`
  padding: 12px 16px;
  display: flex;
  background-color: white;
  color: #101010;
  cursor: pointer;
  transition:
    background-color 0.15s,
    color 0.25s;

  ${({ $show }) =>
    $show
      ? `background-color: #2d3f24; color:white`
      : `background-color: white; color:#101010`};
  &:hover {
    color: white;
    background-color: #2d3f24;
  }
  &:nth-child(even) {
    border-top: 0.5px solid #a7a5a3;
    border-bottom: 0.5px solid #a7a5a3;
  }
`;

export const NoResultBox = styled.div`
  display: block;
`;

export const NoResult = styled.div`
  color: #000;

  p:first-child {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 36px;
    line-height: calc(43 / 36);
  }

  ul {
    margin-bottom: 88px;
  }

  li {
    margin-bottom: 24px;
  }

  li:last-child {
    li {
      margin-bottom: 0px;
    }
  }

  li::before {
    content: '*';
    margin-right: 16px;
  }
`;
