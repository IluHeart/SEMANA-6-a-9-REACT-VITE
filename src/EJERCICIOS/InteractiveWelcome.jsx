import { useState } from "react";
import Welcome from "./Bienvenido";

const InteractiveWelcome = () => {
  const [name, setName] = useState("John");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Ingrese su nombre"
      />
      <Welcome name={name} />
    </div>
  );
};

export default InteractiveWelcome;