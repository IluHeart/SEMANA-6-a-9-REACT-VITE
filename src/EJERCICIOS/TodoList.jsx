import { useState } from "react";
import styles from "../styles/TodoList.module.scss"

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleAdditem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };
  const handleResetItems = () => {
    setItems([]);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <ul className={styles.lista} >
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Agregar nuevo item"
      />

      <button onClick={handleAdditem}>Agregar</button>
      <button onClick={handleResetItems}>Reset</button>
    </div>
  );
};

export default TodoList;

// En referencia al ejercicio 57:
// mi componente borraría el campo de entrada al hacer clic en el botón para agregar un elemento.
