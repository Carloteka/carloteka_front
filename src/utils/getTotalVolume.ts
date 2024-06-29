import { Good } from '../../@types/custom';

export function getTotalVolume(array: Good[]) {
  return array.reduce(
    (
      total: number,
      el: { quantity: number; width: number; height: number; length: number },
    ) =>
      (el.width ? el.width : 0.2) *
        (el.height ? el.height : 0.2) *
        (el.length ? el.length / 100 : 0.2) *
        (el?.quantity ? el.quantity : 1) +
      total,
    0,
  );
}
