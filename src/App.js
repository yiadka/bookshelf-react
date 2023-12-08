import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div>
      <h1>Count: {count}</h1>
      <button 
        onClick={() => setCount(count + 1)}
      >
        increment
      </button>
      <button 
        onClick={() => setCount(count - 1)}
      >
        decrement
      </button>
      <button 
        onClick={() => setCount(count * 2)}
      >
        kakezan
      </button>
    </div>
    </>
  );
}