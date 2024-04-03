import styled from 'styled-components';

export const PrivacyPolicy = styled.div`
  width: 100%;
  height: 1032px;

  overflow-x: hidden;
  text-align: left;

  @media screen and (min-width: 1440px) {
    width: 975px;
  }

  @media screen and (max-width: 1439px) {
    overflow-y: scroll;

    &::-webkit-scrollbar-thumb {
      background: rgba(18 20 23 / 15%);
    }

    &:not(:hover) {
      &::-webkit-scrollbar,
      &::-webkit-scrollbar-thumb {
        background: transparent;
      }
    }
  }

  ul > li {
    padding-left: 32px;
    position: relative;
  }
  li::before {
    content: '';
    position: absolute;
    left: 10px;
    top: 10px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: black;
  }

  ol {
    padding-left: 32px;
    list-style-position: outside;

    & > li {
      text-indent: 4px;
    }
  }

  a {
    display: inline;
    text-decoration: underline;
    color: blue;
  }

  p,
  ul,
  ol {
    margin-bottom: 1rem;
  }
`;
