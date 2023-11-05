const MouseClicker = ({ name }) => {
  const handleClick = (event) => {
    console.log("Boton click:", event.target.name);
  };

  const handleImageClick = (event) => {
    console.log("Imagen clicada, src:", event.target.src);
    event.stopPropagation();
  };

  return (
    <button name={name} onClick={handleClick}>
      <img
        src="./img jpg/Mirada juzgando.jpg"
        alt=""
        onClick={handleImageClick}
      />
    </button>
  );
};

export default MouseClicker;
