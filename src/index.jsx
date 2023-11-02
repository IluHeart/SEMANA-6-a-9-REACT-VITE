import ReactDOM from "react-dom";
import { createRoot } from "react-dom";
import "./index.scss";
import Bienvenido from "./Ejercicios/Bienvenido";
import App from "./App";

const root = document.getElementById("root");

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(<Bienvenido className="welcome" name="John" age={25} />, root);

const appRoot = createRoot(root);
appRoot.render(<App />);
