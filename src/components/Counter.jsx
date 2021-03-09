import { useState } from 'react';

// Imutabilidade

// state -> Hook = gancho
// ...usuarios => "..." spread operator

export function Counter() {
  // Valor inicial da variável
  // Desestruturação de array
  const [counter, setCounter] = useState(0);

  // "let" valor pode ser alterado

  function increment() {
    // setCounter() alterando o estado do h2
    setCounter(counter + 1);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button
        type="button"
        onClick={increment}>Increment</button>
    </div>
  );
}