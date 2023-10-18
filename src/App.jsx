import Hello from "./Ejercicios/Hello";
import Message from "./EJERCICIOS/Message";
import Bienvenido from "./EJERCICIOS/Bienvenido";
import AlertClock from "./EJERCICIOS/AlertClock"

function App() {
  let name = "John";
  return (
    <div className="App">
      <Hello/>
      <Message/>
      <Bienvenido name={name} />
      <AlertClock/> 
      {/* Ya lo renderioce en el Ejercicio anterior , ups */}
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