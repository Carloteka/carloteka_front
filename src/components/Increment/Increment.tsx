import { IncrementBox } from './Increment.styled';
import { Good } from '../../../@types/custom';

interface IncrementProps {
  quantity: number;
  good: Good;
  increment: (quantity: number, good: Good) => void;
  setQuantity: (quantity: number) => void;
}

export const Increment = ({
  increment,
  good,
  quantity,
  setQuantity,
}: IncrementProps) => {
  function incrementHandle(payload: number) {
    if (payload + quantity === 0) {
      return;
    }
    increment(payload + quantity, good);
    if (setQuantity) {
      setQuantity(payload + quantity);
    }
  }

  return (
    <IncrementBox>
      <button type="button" onClick={() => incrementHandle(-1)}>
        --
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={() => incrementHandle(1)}>
        +
      </button>
    </IncrementBox>
  );
};
