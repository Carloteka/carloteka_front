import styled from 'styled-components';

export const SectionAdditionalInfo = styled.section`
  padding-top: 0px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  color: #000;

  @media screen and (min-width: 1440px) {
    padding-top: 8px;
    flex-direction: row;
  }

  & > table {
    width: 100%;
    min-height: 136px;

    text-align: left;

    border-collapse: separate;
    border-spacing: 0 0px;

    @media screen and (min-width: 834px) {
      width: 640px;
      min-height: 186px;
    }
  }

  & > table > tbody {
    vertical-align: top;
  }

  & > table td:first-child {
    width: auto;
    @media screen and (min-width: 1440px) {
      width: 336px;
    }
  }

  & > table td:last-child {
    padding-bottom: 12px;
    text-align: right;

    @media screen and (min-width: 1440px) {
      padding-bottom: 0px;
    }
  }

  & > details {
    display: none;

    @media screen and (min-width: 834px) {
      width: 100%;
      display: block;
      padding: 32px;
      height: clamp(95px, 95px, 211px);
      background-color: #dad4c8;
    }
    @media screen and (min-width: 1440px) {
      width: 639px;
    }
  }

  & > details table {
    margin-top: 16px;
    width: 648px;
    height: 93px;

    @media screen and (min-width: 1440px) {
      width: 528px;
    }

    & td:last-child {
      text-align: right;
    }
  }

  details > summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    cursor: pointer;
  }
  details > summary::-webkit-details-marker {
    display: none;
  }

  details[open] {
    height: 211px;

    svg {
      transform: rotate(0deg);
    }
  }

  svg {
    padding: 7px 2px;
    transform: rotate(180deg);
  }
`;
