import styled from 'styled-components';
import Select from 'react-select';

export const DeliveryBox = styled.section`
  position: relative;
  display: flex;
  gap: 32px;

  justify-content: center;
  align-items;
  


  aside {
    padding-top: 116px;
  }
`;

export const Form = styled.form`
  width: 752px;

  h2 {
    margin-bottom: 40px;
  }

  h3 {
    margin: 56px 0 40px;
  }

  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .short {
    width: 368px;
  }

  input,
  select {
    padding: 16px;
    width: 100%;
    height: 50px;
    border: 1px solid #a7a5a3;
  }

  textarea {
    padding: 16px;
    width: 100%;
    height: 112px;
    font-family: inherit;
    font-size: 18px;
    line-height: calc(25 / 18);
    color: #000;
    resize: none;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 32px;
`;

export const StyledSelect = styled(Select)`
  .rs__indicator-separator {
    display: none;
  }
  &.react-select-container {
    width: 100%;
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
