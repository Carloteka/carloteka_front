import styled from 'styled-components';

export const PaymentSection = styled.section`
  margin-bottom: 47px;
  display: flex;
  flex-direction: column-reverse;
  gap: 32px;

  @media screen and (min-width: 834px) {
    margin-bottom: 56px;
    flex-direction: row;
    align-items: center;
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 88px;
    gap: 32px;
  }

  div {
    width: 100%;
    align-self: center;
    text-align: left;

    @media screen and (min-width: 1440px) {
      width: 640px;
    }
  }

  ul {
    padding-bottom: 1em;
    padding-left: 36px;
    list-style-type: disc;
  }

  h3 {
    font-size: 24px;
    line-height: calc(31 / 24);
  }

  img {
    width: 100%;
    height: 426px;
    @media screen and (min-width: 834px) {
      width: 328px;
      height: 354px;
    }
    @media screen and (min-width: 1440px) {
      width: 640px;
      height: 426px;
    }
  }
`;

export const DeliverySection = styled.section`
  margin-bottom: 56px;
  width: 100%;
  display: block;
  text-align: left;

  @media screen and (min-width: 834px) {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }
  @media screen and (min-width: 1440px) {
    column-gap: 32px;
  }

  h3 {
    margin-bottom: 24px;
    width: 100%;
    font-size: 24px;
    line-height: calc(31 / 24);
    @media screen and (min-width: 1440px) {
      margin-bottom: 0;
    }
  }

  & > details {
    width: 100%;
    @media screen and (min-width: 834px) {
      width: 416px;

      &:last-child {
        width: 328px;
        & ol::-webkit-scrollbar {
          width: 0;
        }
      }
    }
    @media screen and (min-width: 1440px) {
      width: 640px;
      &:last-child {
        width: 640px;
      }
    }
  }

  & > details ol {
    padding: 24px 10px 44px 48px;
    max-height: 345px;
    box-sizing: border-box;
    background-color: #dad4c8;
    text-shadow: 0 4px 4px #00000025;
    overflow-y: scroll;
    word-wrap: break-word;

    @media screen and (min-width: 834px) {
      padding: 20px 0 0 32px;
      max-height: 398px;
      background-color: inherit;
    }
    @media screen and (min-width: 1440px) {
      padding: 20px 20px 20px 56px;
      height: 317px;
    }
  }

  details > summary {
    padding: 29.5px 20px 29.5px 25.5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    background-color: #dad4c8;
    list-style: none;
    cursor: pointer;

    p {
      display: none;
      margin-left: auto;
      @media screen and (min-width: 1440px) {
        display: block;
      }
    }
  }
  details > summary::-webkit-details-marker {
    display: none;
  }

  details[open] {
    svg:last-child {
      transform: rotate(0deg);
    }
  }

  svg:last-child {
    padding: 7px 2px;
    transform: rotate(180deg);
  }
  svg:first-child {
    stroke: #101010;
    fill: transparent;
  }
`;

export const InfoSection = styled.section`
  text-align: left;

  h3 {
    font-size: 24px;
    line-height: calc(31 / 24);
  }
`;
