/* eslint-disable react/prop-types */
import Color from "./Color.jsx";

const Colors = ({ items }) => {
  return (
    <ul>
      {items.map((color) => (
        <Color key={color.id} id={color.id} name={color.name} />
      ))}
    </ul>
  );
};

export default Colors;
