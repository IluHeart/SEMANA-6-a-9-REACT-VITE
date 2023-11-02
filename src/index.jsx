import ReactDOM from "react-dom";
import { createRoot } from "react-dom";
import "./index.scss";
import Bienvenido from "./Ejercicios/Bienvenido";
import App from "./App";

const root = document.getElementById("root");

ReactDOM.render(<Bienvenido className="welcome" name="John" age={25} />, root);

const appRoot = createRoot(root);
appRoot.render(<App />);
