import React from 'react';
import { CounterCounter } from './CounterContainer';

const Counter = () => {
  const counter = CounterCounter.useContainer();
  return (
    <>
      Count: {counter.count}
      <button onClick={counter.reset}>Reset</button>
      <button onClick={counter.decrement}>-</button>
      <button onClick={counter.increment}>+</button>
    </>
  );
};
export default Counter;
