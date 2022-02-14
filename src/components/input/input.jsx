import "./style.css";
import { useState } from "react";

const Input = ({ products, keyFilter }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <form>
        <input
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="tem que ter botao aqui dentro"
          value={value}
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            keyFilter(value);
          }}
          type="button"
        >
          pesquisar
        </button>
      </form>
    </div>
  );
};

export default Input;
