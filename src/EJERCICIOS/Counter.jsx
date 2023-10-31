/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import CounterDisplay from "./CounterDisplay";

const Counter = ({ initialValue, incrementAmount, decrementAmount }) => {
  const [counter, setCounter] = useState(initialValue);
  useEffect(() => {
    console.log("Valor actual del contador:", counter);
  }, [counter]);

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
