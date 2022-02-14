import { useState } from "react";

// map que vai retornar o preco e eu vou colcoar num state o preco total
const Preco = ({ price }) => {
  return (
    <div>
      <span>{price()}</span>
    </div>
  );
};

export default Preco;
