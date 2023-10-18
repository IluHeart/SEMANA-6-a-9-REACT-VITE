const MouseClicker = ({ name }) => {
  const handleClick = (event) => {
    console.log("Boton click:", event.target.name);
  };

  return (
    <button name={name} onClick={handleClick}>
      <img src="Mirada juzgando.jpg" alt="" />
      {name}
    </button>
  );
};

export default MouseClicker;
