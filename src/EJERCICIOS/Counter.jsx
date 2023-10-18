import React, { useState } from "react";

const Counter = ({ initialValue, incrementAmount }) => {
    const [counter, setCounter] = useState(initialValue);

  const incrementCounter = () => {
    setCounter(counter + incrementAmount);
  };

  return (
    <div>
      <h2>Contador: {counter}</h2>
      <button onClick={incrementCounter}>Incrementar</button>
    </div>
  );
};

export default Counter;
