import styled from 'styled-components';

export const SectionAboutBrand = styled.section`
  margin: 24px 0;
  display: block;
  text-align: left;

  @media screen and (min-width: 834px) {
    margin: 45px 0;
    display: flex;
  }

  @media screen and (min-width: 1440px) {
    margin: 80px 0 72px;
  }

  & > div:first-child {
    margin-bottom: 24px;
    width: 100%;

    @media screen and (min-width: 834px) {
      margin-bottom: 0;
      padding: 0 24px 0 0;
    }

    @media screen and (min-width: 1440px) {
      padding: 73.5px 112px 73.5px 0;
      width: 784px;
    }
  }

  & > div:last-child {
    @media screen and (min-width: 1440px) {
      // width: 528px;
    }
  }
`;

export const FirstP = styled.p`
  margin-bottom: 1em;
`;

export const Table = styled.div`
  padding: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  background-color: #dad4c8;

  @media screen and (min-width: 834px) {
    padding: 24px;
    min-width: 416px;
  }

  @media screen and (min-width: 1440px) {
    padding: 80px;
    width: 528px;
    gap: 32px;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  div > p:first-child {
    // width: 136px;
    font-weight: 700;
    font-size: 15px;
    line-height: calc(21 / 15);
    color: #2d3f24;
    text-wrap: wrap;
    // text-align: left;
    // position: absolute;

    @media screen and (min-width: 834px) {
      width: auto;
      font-size: 18px;
      line-height: calc(23 / 18);
      text-wrap: nowrap;
    }
  }
  p:last-child,
  a {
    display: block;
    font-weight: 400;
    font-size: 18px;
    line-height: calc(25 / 18);
    text-align: right;
    color: #101010;

    @media screen and (min-width: 834px) {
      font-weight: 500;
      font-size: 19px;
      line-height: calc(23 / 19);
    }
  }

  & > div .companyTitle {
    @media screen and (max-width: 1439px) {
      font-weight: 700;
      font-size: 15px;
      line-height: calc(21 / 15);
    }
  }

  & > div .telNo {
    @media screen and (max-width: 1439px) {
      width: 80px;
    }
  }
`;

export const SectionAboutShop = styled.section`
  display: block;
  text-align: left;

  @media screen and (min-width: 834px) {
    display: flex;
  }

  & > div:first-child {
    width: 100%;

    @media screen and (min-width: 834px) {
      padding: 0 24px 0 0;
    }

    @media screen and (min-width: 1440px) {
      padding: 49px 32px 0 0;
      width: 527px;
    }
  }

  a {
    margin: 24px 0;
    padding: 0 48px 0 24px;
    position: relative;

    @media screen and (min-width: 834px) {
      margin: 40px 0 0;
    }

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
    width: 100%;
    height: 316px;

    @media screen and (min-width: 834px) {
      margin-top: 156px;
      min-width: 416px;
      height: 351px;
    }

    @media screen and (min-width: 1440px) {
      width: 786px;
      height: 597px;
    }
  }

  picture {
    background-color: #dad4c8;
  }
`;

export const Img1 = styled.picture`
  position: absolute;
  left: -16px;
  width: 115px;
  height: 172.25px;
  z-index: 2;

  @media screen and (min-width: 834px) {
    top: 96px;
    left: 0;
    width: 162px;
    height: 243px;
    z-index: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 229px;
    height: 343px;
  }
`;
export const Img3 = styled.picture`
  position: absolute;
  top: 16px;
  left: 53px;
  width: 172.5px;
  height: 138px;
  z-index: 1;

  @media screen and (min-width: 834px) {
    top: 0;
    left: 95px;
    width: 190px;
    height: 152px;
    z-index: 0;
  }
  @media screen and (min-width: 1440px) {
    left: 205px;
    width: 345px;
    height: 276px;
  }
`;
export const Img2 = styled.picture`
  position: absolute;
  top: 29px;
  right: -37px;
  width: 173px;
  height: 115px;

  @media screen and (min-width: 834px) {
    top: 21px;
    right: -42px;
    width: 195px;
    height: 130px;
  }
  @media screen and (min-width: 1440px) {
    top: 24px;
    right: 0;
    width: 343px;
    height: 228px;
  }
`;
export const Img4 = styled.picture`
  position: absolute;
  right: 111px;
  bottom: 24.4px;
  width: 172px;
  height: 137.6px;
  z-index: 1;

  @media screen and (min-width: 834px) {
    right: 103px;
    bottom: 44px;
    width: 195px;
    height: 155px;
  }
  @media screen and (min-width: 1440px) {
    right: 261px;
    bottom: 45px;
    width: 345px;
    height: 276px;
  }
`;
export const Img5 = styled.picture`
  position: absolute;
  right: -19.6px;
  bottom: 0;
  width: 137.6px;
  height: 172px;

  @media screen and (min-width: 834px) {
    right: -42px;
    bottom: 0;
    width: 177px;
    height: 221px;
  }
  @media screen and (min-width: 1440px) {
    right: 0px;
    bottom: 0;
    width: 276px;
    height: 345px;
  }
`;
