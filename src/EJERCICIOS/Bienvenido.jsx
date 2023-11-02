import Edad from "./Edad"

const Bienvenido = (props) => {
   const isAgeValid = props.age > 18 && props.age < 65;
   console.log(isAgeValid);

   const isNameValid = props.name === 'John';

  return (
<div className="bienvenido">
      <p>Bienvenido, {isNameValid ? <strong>{props.name}</strong> : <strong>HipHop</strong>}!</p>
       {isAgeValid && <Edad age={props.age} />}
       <Edad  age={2}/>
    </div>
  );
};
export default Bienvenido;
