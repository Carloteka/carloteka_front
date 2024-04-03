import styled from 'styled-components';

export const PolicyBox = styled.div`
  display: flex;
  gap: 32px;

  & > div:last-child {
    @media screen and (max-width: 1439px) {
      display: none;
    }
    h2 {
      display: none;
    }
  }
`;
export const PrivacyPolicy = styled.div`
  width: 100%;
  height: 1032px;
  overflow-y: scroll;
  overflow-x: hidden;
  text-align: left;

  @media screen and (min-width: 1440px) {
    min-width: 975px;
  }

  &:not(:hover) {
    &::-webkit-scrollbar,
    &::-webkit-scrollbar-thumb {
      background: transparent;
    }
  }

  h4 {
    display: inline;
  }

  ol {
    list-style-position: inside;
  }

  ul > li {
    text-indent: 26px;
  }
`;
