import { useState } from "react";
import "./style.css";
// map que vai retornar o preco e eu vou colcoar num state o preco total
const Preco = ({ price }) => {
  return (
    <div>
      <span className="price-span">{price()}</span>
    </div>
  );
};

export default Preco;
