export const gridStyles = `display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 16px;
   @media screen and (min-width: 834px) {
    grid-template-columns: repeat(9, 1fr);
    column-gap: 24px;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(12, 1fr);
    column-gap: 32px;
  }
  `;
