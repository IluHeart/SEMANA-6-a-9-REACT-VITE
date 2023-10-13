import Edad from "./Edad"

const Bienvenido = (props) => {
  return (
    <div>
      <p>Bienvenido, {props.name || <strong>HipHop</strong>}</p>
      {props.age && props.age > 18 && <Edad age={props.age} />}
    </div>
  );
};
export default Bienvenido;
