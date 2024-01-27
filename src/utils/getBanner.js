export function getBanner(stock) {
  let banner = '';
  switch (stock) {
    case 'BACKORDER':
      banner = 'очікується';
      break;

    case 'SPECIFIC_ORDER':
      banner = 'під замовлення';
      break;

    case 'OUT_OF_STOCK':
      banner = 'немає в наявності';
      break;

    default:
      banner = 'очікується';
  }
  return banner;
}
