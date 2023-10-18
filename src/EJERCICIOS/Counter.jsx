import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";

const Counter = ({ initialValue, incrementAmount, decrementAmount }) => {
  const [counter, setCounter] = useState(initialValue);

  const incrementCounter = () => {
    setCounter(counter + incrementAmount);
  };
  const decrementCounter = () => {
    setCounter(counter - decrementAmount);
  };

  const resetCounter = () => {
    setCounter(initialValue);
  };

  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={incrementCounter}>Incrementar</button>
      <button onClick={decrementCounter}>Decrementar</button>
      <button onClick={resetCounter}>Reiniciar</button>
    </div>
  );
};

export default Counter;
