import "./style.css";
const Cart = ({ value, click }) => {
  return (
    <div className="div-cart-pai">
      <h2>Carrinho de compras</h2>
      <div className="div-cart-itens">
        <img src={value.img} />
        <div>
          <h2>{value.name}</h2>
          <span>{value.category}</span>
        </div>
        <button onClick={() => click(value.id)}>X</button>
      </div>
      <hr></hr>
      <div className="div-cart-preco"></div>
    </div>
  );
};

export default Cart;
