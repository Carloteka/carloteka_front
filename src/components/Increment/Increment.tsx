import { IncrementBox } from './Increment.styled';

interface IncrementProps {
  quantity: number;
  id: number;
  increment: (quantity: number, id: number) => void;
  setQuantity: (quantity: number) => void;
}

export const Increment = ({
  increment,
  id,
  quantity,
  setQuantity,
}: IncrementProps) => {
  function incrementHandle(payload: number, id: number) {
    if (payload + quantity === 0) {
      return;
    }
    increment(payload + quantity, id);
    if (setQuantity) {
      setQuantity(payload + quantity);
    }
  }

  return (
    <IncrementBox>
      <button type="button" onClick={() => incrementHandle(-1, id)}>
        --
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={() => incrementHandle(1, id)}>
        +
      </button>
    </IncrementBox>
  );
};
