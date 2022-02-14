import "./style.css";

const Card = ({ value, click }) => {
  return (
    <div id={value.id} className="div-card">
      <div className="vitrine-img">
        <img src={value.img} alt={value.category} />
      </div>
      <div className="info-card">
        <h3>{value.name}</h3>
        <span className="category">{value.category}</span>
        <span className="price">R$ {value.price.toFixed(2)}</span>
        <button
          className="button-card"
          id={value.id}
          onClick={() => click(value.id)}
        >
          adicionar
        </button>
      </div>
    </div>
  );
};

export default Card;
