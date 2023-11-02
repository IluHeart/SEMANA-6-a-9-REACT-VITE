/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import CounterDisplay from "./CounterDisplay";
import "../index.scss";

const Counter = ({ initialValue, incrementAmount, decrementAmount }) => {
  const [counter, setCounter] = useState(initialValue);
  const cambiarDireccionRef = useRef(null);

  useEffect(() => {
    if (counter > initialValue) {
      cambiarDireccionRef.current = "up";
    } else if (counter < initialValue) {
      cambiarDireccionRef.current = "down";
    }
    if (cambiarDireccionRef.current !== null) {
      console.log("Dirección Cambiada", cambiarDireccionRef.current);
    }
  }, [counter, initialValue]);

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
    <div className="counter-display">
      <CounterDisplay count={counter} />
      <button onClick={incrementCounter}>Incrementar</button>
      <button onClick={decrementCounter}>Decrementar</button>
      <button onClick={resetCounter}>Reiniciar</button>
    </div>
  );
};

export default Counter;
