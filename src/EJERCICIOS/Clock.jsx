import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import "../index.scss";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const Language = useContext(LanguageContext);
  console.log(Language);

  useEffect(() => {
    console.log("Componente Clock montado");

    const updateClock = () => {
      setCurrentTime(new Date());
    };

    const intervalId = setInterval(updateClock, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("Componente Clock desmontado");
    };
  }, [Language]);

  const getTimeInLanguage = () => {
    const options = {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };

    if (Language === "es") {
      return "Hola Actual: " + currentTime.toLocaleTimeString("es-ES", options);
    } else {
      return (
        "Current Time: " + currentTime.toLocaleTimeString("en-US", options)
      );
    }
  };

  return (
    <div className="clock-container">
      <h2>{getTimeInLanguage()}</h2>
    </div>
  );
};

export default Clock;
