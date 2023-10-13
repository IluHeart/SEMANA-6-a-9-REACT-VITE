import Edad from "./Edad"

const Bienvenido = (props) => {
  const isAgeValid = props.age > 18 && props.age < 65;
  console.log(isAgeValid);

  return (
    <div>
      <p>Bienvenido, {props.name || <strong>HipHop</strong>}</p>
      {isAgeValid && <Edad age={props.age} />}
    </div>
  );
};
export default Bienvenido;
