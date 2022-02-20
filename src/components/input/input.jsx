import "./style.css";
import { useState } from "react";

const Input = ({ products, keyFilter }) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <form>
        <input
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="text"
          placeholder="pesquisar produto"
          value={value}
        ></input>
        <button
          className="button-nav"
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
