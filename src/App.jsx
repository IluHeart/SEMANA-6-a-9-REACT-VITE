import { Link, Route, Routes } from "react-router-dom";
// import Hello from "./Ejercicios/Hello";
// import Message from "./Ejercicios/Message.jsx";
import Bienvenido from "./Ejercicios/Bienvenido";
// import AlertClock from "./Ejercicios/AlertClock";
import Counter from "./Ejercicios/Counter";
// import Clock from "./Ejercicios/Clock";
// import MouseClicker from "./Ejercicios/MouseClicker";
// import MultiButton from "./Ejercicios/MultiButton";
// import InteractiveWelcome from "./Ejercicios/InteractiveWelcome";
// import Login from "./Ejercicios/Login";
// import UncontrolledLogin from "./Ejercicios/UncontrolledLogin";
// import FocusableInput from "./EJERCICIOS/FocusableInput";
// import FirstMount from "./Ejercicios/FirstMount";
// import Colors from "./Ejercicios/Colors";
// import TodoList from "./Ejercicios/TodoList";
// import Container from "./Ejercicios/Container";
// import { LanguageProvider } from "./Ejercicios/LanguageContext";
// import LanguageSelector from "./Ejercicios/LanguageSelector";
// import GithubUser from "./Ejercicios/GithubUser";
import GithubUsers from "./Ejercicios/GithubUsers";
// import LoginForm from "./Ejercicios/LoginForm";
// import CurrentLocation from "./Ejercicios/CurrentLocation";
// import FilteredList from "./Ejercicios/FilteredList";
// import ShowGithubUser from "./Ejercicios/ShowGithubUser";
import NotFound from "./Ejercicios/NotFound";
import "./index.scss";

function App() {
  // const handleLogin = (userData) => {
  //   console.log("Login data:", userData);
  // };
  const initialValue = 100;
  const incrementAmount = 20;
  const decrementAmount = 20;

  // const handleAlertClick = (currentTime) => {
  //   alert(`La hora actual es: ${currentTime}`);
  // };
  // const name = "John";
  // const colorList = [
  //   { id: 1, name: "Rojo" },
  //   { id: 2, name: "Negro" },
  //   { id: 3, name: "Dorado" },
  //   { id: 4, name: "Verde" },
  // ];

  // const studentsList = [
  //   { id: 1, name: "Ilies", age: 21 },
  //   { id: 2, name: "Nico", age: 37 },
  //   { id: 3, name: "Jennifer", age: 10 },
  //   { id: 3, name: "Wilmer", age: 25 },
  // ];

  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/users">Show Github Users</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Bienvenido name={name} age={69} />} />
        <Route
          path="/counter"
          element={
            <Counter
              initialValue={initialValue}
              incrementAmount={incrementAmount}
              decrementAmount={decrementAmount}
            />
          }
        />
        <Route path="/users" element={<GithubUsers />}>
          <Route index element={<p>Add a user and select it</p>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <LanguageProvider>
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
      <GithubUsers />
      <LoginForm onLogin={handleLogin} />
      <CurrentLocation />
      <FilteredList list={studentsList} /> */}
    </div>
  );
}
export default App;
