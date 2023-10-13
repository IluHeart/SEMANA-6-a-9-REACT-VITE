const Edad = ({ age }) => {
  if (age > 18) {
    return <p>Tu edad es {age}</p>;
  } else {
    return <p>¡Eres muy joven!</p>;
  }
};

export default Edad;
