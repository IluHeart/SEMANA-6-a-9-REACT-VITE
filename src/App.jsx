import Hello from "./Ejercicios/Hello";
import Message from "./Ejercicios/Message.jsx";
import Bienvenido from "./Ejercicios/Bienvenido";
import AlertClock from "./Ejercicios/AlertClock";
import Counter from "./Ejercicios/Counter";
import Clock from "./Ejercicios/Clock";
import MouseClicker from "./Ejercicios/MouseClicker";
import MultiButton from "./Ejercicios/MultiButton";
import InteractiveWelcome from "./Ejercicios/InteractiveWelcome";
import Login from "./Ejercicios/Login";
import UncontrolledLogin from "./Ejercicios/UncontrolledLogin";
import FocusableInput from "./EJERCICIOS/FocusableInput";
import FirstMount from "./Ejercicios/FirstMount";

function App() {
  const handleLogin = (userData) => {
    console.log("Login data:", userData);
  };
  const initialValue = 0;
  const incrementAmount = 5;
  const decrementAmount = 1;

  const handleAlertClick = (currentTime) => {
    alert(`La hora actual es: ${currentTime}`);
  };
  const name = "John";
  return (
    <div className="App">
      <Hello />
      <Message />
      <Bienvenido name={name} age={69} />
      <AlertClock onClickHandler={handleAlertClick} />
      <Counter
        initialValue={initialValue}
        decrementAmount={decrementAmount}
        incrementAmount={incrementAmount}
      />
      <Clock />
      <MouseClicker name="one" />
      <MultiButton />
      <InteractiveWelcome />
      <Login onLogin={handleLogin} />
      <UncontrolledLogin onLogin={handleLogin} />
      <FocusableInput/>
      <FirstMount/>
    </div>
  );
}
export default App;

/**
 * En respuesta al ejercicio 13, si utilizo el componente Hello varias veces en mi archivo App.js,
 * se generará una nueva instancia de la función de mi componente, la cual renderiza un elemento <h2>Hello, World!</h2>.
 */

/** En respuesta al ejercicio 17 de props,
 *notamos que es posible definir un valor
 *por defecto cuando no se suministra un
 *nombre en la variable 'name'.
 *De lo contrario, la variable mostrará 'undefined'
 *como valor.
 */

/**
 * Respuesta al ejercicio 30:
 * En este componente, empleamos una función de ejecución inmediata.
 * Sin embargo, también podríamos lograr el mismo resultado utilizando una
 * función que devuelva un valor, como por ejemplo, setCounter(prevCounter => prevCounter + 1).
 * Ambos enfoques nos llevan al resultado deseado.
 * La elección entre estas dos variantes depende de las distintas situaciones que puedan surgir a
 * medida que trabajemos en más proyectos y ejercicios. La diferencia clave entre estas funciones radica en que
 *  la primera proporciona un valor directamente, mientras que la segunda toma un valor existente y le suma una
 * cantidad especificada.
 */
