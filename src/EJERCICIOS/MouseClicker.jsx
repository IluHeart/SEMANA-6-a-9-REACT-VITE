const MouseClicker = ({ name }) => {
  const handleClick = (event) => {
    console.log("Boton click:", event.target.name);
  };

  const handleImageClick = (event) => {
    console.log("Img click, src:", event.target.src);
  };

  return (
    <button name={name} onClick={handleClick}>
      <img
        src="./img jpg/Mirada juzgando.jpg"
        alt=""
        onClick={handleImageClick}
      />
      {name}
    </button>
  );
};

export default MouseClicker;
