import Hello from "./Ejercicios/Hello";
import Message from "./Message";

function App() {
  return (
    <div className="App">
      <Hello/>
      <Message/>
      <Hello />
    </div>
  );
}
export default App

/**
 * En respuesta al ejercicio 13, si utilizo el componente Hello varias veces en mi archivo App.js,
 * se generará una nueva instancia de la función de mi componente, la cual renderiza un elemento <h2>Hello, World!</h2>.
 */
