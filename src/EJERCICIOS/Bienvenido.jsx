const Bienvenido = (props) => {
  return (
    <div>
      <p>Bienvenido, {props.name || <strong>HipHop</strong>}!</p>
      {props.age && <p>Tu edad es {props.age}.</p>}
    </div>
  );
};
export default Bienvenido;
