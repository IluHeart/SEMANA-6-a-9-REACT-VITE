import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberChange = (event) => {
    setRemember(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const username = formData.get("username");
    const password = formData.get("password");
    const remember = formData.get("remember") === "on";

    if (username && password) {
      onLogin({ username, password, remember });
    }
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
    setRemember(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username" 
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password" 
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="remember" 
            checked={remember}
            onChange={handleRememberChange}
          />
          Remember
        </label>
      </div>
      <button type="submit" disabled={!username || !password}>
        Login
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default Login;

/**
 * Respuesta al ejercicio sobre Formularios No Controlados 48:
 * 
 * ¿Existen APIs no estándar que se puedan utilizar para acceder a los datos del formulario? 
 * Respuesta: Sí, existen APIs no estándar, como la utilización de document.getElementById. 
 * No se recomienda utilizar este enfoque, ya que hay métodos más modernos y legibles disponibles en la actualidad.
 * 
 * ¿Cuál es la API estándar? 
 * Respuesta: La API estándar es una interfaz de programación de aplicaciones que sigue un conjunto de especificaciones y reglas ampliamente aceptadas. Estas especificaciones son definidas y mantenidas por organizaciones reconocidas y generalmente están disponibles públicamente para que los desarrolladores las utilicen.
 */
