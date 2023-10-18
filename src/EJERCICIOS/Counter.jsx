import React, { useState } from "react";
import CounterDisplay  from "./CounterDisplay";

const Counter = ({ initialValue, incrementAmount }) => {
    const [counter, setCounter] = useState(initialValue);

  const incrementCounter = () => {
    setCounter(counter + incrementAmount);
  };

  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={incrementCounter}>Incrementar</button>
    </div>
  );
};

export default Counter;
