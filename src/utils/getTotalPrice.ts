import { Good } from '../../@types/custom';

export function getTotalPrice(array: Good[]) {
  return array
    .reduce(
      (total: number, el: { quantity: number; price: number }) =>
        el.price * (el?.quantity ? el.quantity : 1) + total,
      0,
    )
    .toFixed(2);
}
