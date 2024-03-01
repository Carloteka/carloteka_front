import styled from 'styled-components';
import Select from 'react-select';

export const DeliveryBox = styled.section`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  gap: 24px;
  text-align: left;

  button {
    display: none;
    @media screen and (min-width: 1440px) {
      display: flex;
    }
  }

  aside {
    padding-top: 0;
    @media screen and (min-width: 1440px) {
      padding-top: 116px;
    }
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
  }

  .error {
    margin: -20px 0;
    color: red;
    font-size: 0.9rem;
  }
`;

export const Form = styled.form`
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 752px;
  }

  h2 {
    margin-bottom: 24px;

    @media screen and (min-width: 1440px) {
      margin-bottom: 40px;
    }
  }

  h3 {
    margin: 24px 0;
    @media screen and (min-width: 1440px) {
      margin: 56px 0 40px;
    }
  }

  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .short {
    width: 100%;

    @media screen and (min-width: 1440px) {
      width: 368px;
    }
  }

  input,
  select {
    padding: 8px;
    width: 100%;
    height: 50px;
    border: 1px solid #a7a5a3;

    @media screen and (min-width: 1440px) {
      padding: 16px;
    }
  }

  textarea {
    padding: 8px;
    width: 100%;
    height: 112px;
    font-family: inherit;
    font-size: 18px;
    line-height: calc(25 / 18);
    color: #000;
    resize: none;

    @media screen and (max-width: 1439px) {
      &::-webkit-input-placeholder {
        position: absolute;
        top: 40px;
      }
    }

    @media screen and (min-width: 1440px) {
      padding: 16px;
    }
  }

  button {
    margin-top: 24px;
    display: flex;
    @media screen and (min-width: 1440px) {
      display: none;
    }
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 16px;

  @media screen and (min-width: 1440px) {
    row-gap: 32px;
  }
`;

export const StyledSelect = styled(Select)`
  .rs__indicator-separator {
    display: none;
  }
  &.react-select-container {
    width: 100%;
  }
  .rs__control {
    padding: 0 8px;

    @media screen and (min-width: 1440px) {
      padding: 0 16px;
    }
  }
  .rs__input {
    margin: 0;
    height: 50px;
  }
  .rs__input-container {
    height: 50px;
  }
  .rs__menu {
    margin-top: 0;
    border: 1px solid #a7a5a3;
    border-radius: 0;
  }
  .rs__option:hover {
    svg {
      fill: white;
    }
  }
  .rs__menu-list {
    padding-top: 0;
  }
  .rs__value-container {
    padding: 0;
    height: 50px;
  }
  .rs__single-value {
    margin-left: 0;
    color: #101010;

    svg {
      display: none;
    }
  }
  .rs__placeholder {
    padding-bottom: 4px;
    color: #a7a5a3;
  }
`;

export const GeoIcon = styled.svg`
  padding: 2px 4px;
  fill: #5b5b59;
  margin-right: 8px;
`;
