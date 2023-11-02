import { useRef } from "react";

const UncontrolledLogin = ({ onLogin }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const rememberRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const remember = rememberRef.current.checked;

    if (username && password) {
      onLogin({ username, password, remember });
    }
  };

  const handleReset = () => {
    usernameRef.current.value = "";
    passwordRef.current.value = "";
    rememberRef.current.checked = false;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernames">Username:</label>
        <input
          className="border rounded p-4 bg-pink-200"
          type="text"
          id="usernames"
          ref={usernameRef}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          className="border rounded p-4 bg-pink-200"
          type="password"
          id="passwords"
          ref={passwordRef}
        />
      </div>
      <div>
        <label>
          <input type="checkbox" ref={rememberRef} />
          Remember Me
        </label>
      </div>
      <button className="m-4 p-6 bg-blue-500 text-white" type="submit">
        Login
      </button>
      <button
        className="m-4 p-6 bg-blue-500 text-white"
        type="button"
        onClick={handleReset}
      >
        Reset
      </button>
    </form>
  );
};

export default UncontrolledLogin;

/**
 * Respuesta al ejercicio 47:
 *
 * Hay tres métodos para acceder a los valores actuales de username y password en un formulario.
 *
 * numero 1: La primera opción implica el uso de componentes controlados, donde los campos de entrada están vinculados al estado de React.
 * Puedes acceder directamente a los valores desde las variables de estado, por ejemplo:
 * const [username, setUsername] = useState('');
 * const [password, setPassword] = useState('');
 * const nombreUsuarioActual = username;
 * const contraseñaActual = password;
 *
 * numero 2: La segunda forma es utilizando Refs con componentes no controlados para acceder a los nodos del DOM y sus valores actuales. Por ejemplo:
 * const refUsuario = useRef(null);
 * const refContraseña = useRef(null);
 * const nombreUsuarioActual = refUsuario.current.value;
 * const contraseñaActual = refContraseña.current.value;
 * <input type="text" ref={refUsuario} />
 * <input type="password" ref={refContraseña} />
 *
 * numero 3: La tercera alternativa es utilizar Objetos de Evento en Manejadores de Eventos, donde puedes acceder a los valores a través del objeto de evento
 * que se pasa al manejador de eventos. Por ejemplo:
 * const handleSubmit = (event) => {
 *   event.preventDefault();
 *   const nombreUsuarioActual = event.target.elements.username.value;
 *   const contraseñaActual = event.target.elements.password.value;
 * };
 *
 * Es importante considerar que el enfoque adecuado dependerá de si estás utilizando componentes controlados o no controlados,
 * así como de los requisitos específicos de tu aplicación. Los componentes controlados están más enfocados en React y se gestionan a través del estado,
 * mientras que los componentes no controlados interactúan de manera más directa con el DOM.
 */
