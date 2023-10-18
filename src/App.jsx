import Hello from "./Ejercicios/Hello";
import Message from "./EJERCICIOS/Message";
import Bienvenido from "./EJERCICIOS/Bienvenido";
import AlertClock from "./EJERCICIOS/AlertClock"
import Counter from "./EJERCICIOS/Counter";
import Clock from "./EJERCICIOS/Clock";
import MouseClicker from "./EJERCICIOS/MouseClicker";
import MultiButton from "./EJERCICIOS/MultiButton"
import InteractiveWelcome from "./EJERCICIOS/InteractiveWelcome"
import Login from "./EJERCICIOS/Login"
import UncontrolledLogin from "./EJERCICIOS/UncontrolledLogin"

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
      <Hello/>
      <Message/>
      <Bienvenido name={name} age={69} />
      <AlertClock onClickHandler={handleAlertClick} />
      <Counter initialValue={initialValue} decrementAmount={decrementAmount} incrementAmount={incrementAmount}  />
      <Clock/>
      <MouseClicker name="one" />
      <MultiButton/>
      <InteractiveWelcome/>
      <Login onLogin={handleLogin} />
      <UncontrolledLogin onLogin={handleLogin}/>
    </div>
  );
}
export default App

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