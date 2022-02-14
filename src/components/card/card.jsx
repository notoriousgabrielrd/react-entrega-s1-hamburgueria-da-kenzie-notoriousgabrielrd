import "./style.css";

const Card = ({ value, click }) => {
  return (
    <div id={value.id} className="div-card">
      <img src={value.img} alt={value.category} />
      <h2>{value.name}</h2>
      <span>{value.category}</span>
      <span>{value.price}</span>
      <button id={value.id} onClick={() => click(value.id)}>
        adicionar
      </button>
    </div>
  );
};

export default Card;
