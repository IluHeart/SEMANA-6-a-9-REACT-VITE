import Hello from "./Ejercicios/Hello";
import Message from "./EJERCICIOS/Message";
import Bienvenido from "./EJERCICIOS/Bienvenido";
import AlertClock from "./EJERCICIOS/AlertClock"
import Counter from "./EJERCICIOS/Counter";

function App() {
  const handleAlertClick = (currentTime) => {
    alert(`La hora actual es: ${currentTime}`);
  };
  const name = "Ilies";
  return (
    <div className="App">
      <Hello/>
      <Message/>
      <Bienvenido name={name} />
      <AlertClock  onClickHandler={handleAlertClick}  />
      {/* Ya lo renderioce en el Ejercicio anterior , ups */}
      <Counter/>
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