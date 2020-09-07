import React, { createContext } from 'react';
import { AppProvider } from './AppContext';
import Counter from './Counter';
import './App.css';

const initialCount = 0;
export const AppContext = createContext(initialCount);
function App() {
  return (
    <AppProvider>
      <div className="App">
        <Counter />
      </div>
    </AppProvider>
  );
}

export default App;
