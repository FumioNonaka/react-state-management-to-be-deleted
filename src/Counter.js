import React, { useCallback, useContext } from 'react';
import { AppContext } from './AppContext';

const Counter = () => {
  const { state, dispatch } = useContext(AppContext);
  const reset = useCallback((event) => dispatch({ type: 'reset' }), [dispatch]);
  const decrement = useCallback((event) => dispatch({ type: 'decrement' }), [
    dispatch,
  ]);
  const increment = useCallback((event) => dispatch({ type: 'increment' }), [
    dispatch,
  ]);
  return (
    <>
      Count: {state.count}
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  );
};
export default Counter;
