import "./style.css";

const Card = ({ img, name, category, price, id }) => {
  return (
    <div id={id} className="div-card">
      <img src={img} alt={category} />
      <h2>{name}</h2>
      <span>{category}</span>
      <span>{price}</span>
      <button>adicionar </button>
    </div>
  );
};

export default Card;
