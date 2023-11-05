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
import Colors from "./Ejercicios/Colors";
import TodoList from "./Ejercicios/TodoList";
import Container from "./Ejercicios/Container";
import { LanguageProvider } from "./Ejercicios/LanguageContext";
import LanguageSelector from "./Ejercicios/LanguageSelector";
import GithubUser from "./Ejercicios/GithubUser";
import GithubUsers from "./Ejercicios/GithubUsers";

function App() {
  const handleLogin = (userData) => {
    console.log("Login data:", userData);
  };
  const initialValue = 100;
  const incrementAmount = 20;
  const decrementAmount = 20;

  const handleAlertClick = (currentTime) => {
    alert(`La hora actual es: ${currentTime}`);
  };
  const name = "John";
  const colorList = [
    { id: 1, name: "Rojo" },
    { id: 2, name: "Negro" },
    { id: 3, name: "Dorado" },
    { id: 4, name: "Verde" },
  ];

  return (
    <div className="App">
      <LanguageProvider>
        <LanguageSelector />
        <Clock />
      </LanguageProvider>
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
      <FocusableInput />
      <FirstMount />
      <h1>Lista de colores</h1>
      <Colors items={colorList} />
      <TodoList />
      <Container title="Contenedor">
        <p>Container</p>
      </Container>
      <GithubUser username="IluHeart" />
      <GithubUsers/>
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

/**
 * En respuesta al ejercicio del Context 72:
 * Si elimino el proveedor de Context en este componente, perderé la capacidad de acceder al contexto "Language", lo que resultaría en un valor indefinido.
 */
