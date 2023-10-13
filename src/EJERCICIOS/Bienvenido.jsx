const Bienvenido = (props) => {
  return (
    <div>
      <p>Welcome, {props.name || "guest"}!</p>
      {props.age && <p>Tu edad es {props.age}.</p>}
    </div>
  );
};
export default Bienvenido;
