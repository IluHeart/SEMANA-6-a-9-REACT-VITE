import Edad from "./Edad"

const Bienvenido = (props) => {
  return (
    <div>
      <p>Bienvenido, {props.name || <strong>HipHop</strong>}</p>
      {props.age && <Edad age={props.age} />}
    </div>
  );
};
export default Bienvenido;
