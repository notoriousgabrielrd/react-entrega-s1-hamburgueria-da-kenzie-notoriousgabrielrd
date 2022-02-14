import "./style.css";
const Cart = ({ value, click }) => {
  return (
    <div className="div-cart-pai">
      <div className="div-cart-itens">
        <div className="vitrine">
          <img src={value.img} />
        </div>
        <div className="info-cart">
          <h3 className="h2-cart">{value.name}</h3>
          <span className="span-categoria">{value.category}</span>
        </div>
        <button onClick={() => click(value.id)}>remover</button>
      </div>
      <div className="div-cart-preco"></div>
    </div>
  );
};

export default Cart;
