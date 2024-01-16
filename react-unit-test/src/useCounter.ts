import { useState } from 'react';

type UseCounterReturnType = [
  count: number, 
  increment: (delta: number) => void, 
  decrement: (delta: number) => void
];

export default function useCounter(initialCount: number = 0): UseCounterReturnType {
  
  const [count, setCount] = useState(initialCount);

  const increment = (delta: number) => {
    setCount(count => count + delta);
  };

  const decrement = (delta: number) => {
    setCount(count => count - delta);
  };

  return [count, increment, decrement];
}
