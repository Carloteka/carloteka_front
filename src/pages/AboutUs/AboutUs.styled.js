import styled from 'styled-components';

export const SectionAboutBrand = styled.section`
  margin: 80px 0 72px;
  display: flex;

  & > div:first-child {
    padding: 73.5px 112px 73.5px 0;
    width: 784px;
  }

  & > div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 528px;
    background-color: #dad4c8;
  }
`;

export const FirstP = styled.p`
  margin-bottom: 1em;
`;

export const Table = styled.table`
  width: 368px;

  border-collapse: separate;
  border-spacing: 0 32px;

  td:first-child {
    font-weight: 700;
    font-size: 18px;
    line-height: calc(23 / 18);
    vertical-align: top;
    color: #2d3f24;
    text-wrap: nowrap;
  }
  td:last-child,
  a {
    display: block;
    font-weight: 500;
    font-size: 19px;
    line-height: calc(23 / 19);
    vertical-align: top;
    text-align: right;
    color: #101010;
  }
`;

export const SectionAboutShop = styled.section`
  display: flex;

  & > div:first-child {
    padding: 49px 32px 0 0;
    width: 527px;
  }

  a {
    margin-top: 40px;
    padding: 0 48px 0 24px;
    position: relative;

    @media screen and (min-width: 1440px) {
      width: 304px;
    }
  }

  svg {
    position: absolute;
    right: 24px;
    top: 16px;
    fill: white;
  }

  & > div:last-child {
    position: relative;
    width: 786px;
    height: 597px;
  }
`;

export const Img1 = styled.picture`
  position: absolute;
  top: 96px;
`;
export const Img3 = styled.picture`
  position: absolute;
  right: 236px;
`;
export const Img2 = styled.picture`
  position: absolute;
  right: 0;
`;
export const Img4 = styled.picture`
  position: absolute;
  right: 261px;
  bottom: 45px;
`;
export const Img5 = styled.picture`
  position: absolute;
  right: 0px;
  bottom: 0;
`;
