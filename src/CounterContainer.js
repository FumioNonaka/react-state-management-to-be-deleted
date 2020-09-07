import { useState } from 'react';
import { createContainer } from 'unstated-next';

const useCounter = (initialState = 0) => {
  const [count, setCount] = useState(initialState);
  const reset = () => setCount(initialState);
  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);
  return { count, reset, decrement, increment };
};
export const CounterCounter = createContainer(useCounter);
