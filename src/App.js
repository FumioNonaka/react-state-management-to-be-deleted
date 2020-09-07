import React, { createContext } from 'react';
import { CounterCounter } from './CounterContainer';
import Counter from './Counter';
import './App.css';

const initialCount = 0;
export const AppContext = createContext(initialCount);
function App() {
  return (
    <CounterCounter.Provider>
      <div className="App">
        <Counter />
      </div>
    </CounterCounter.Provider>
  );
}

export default App;
