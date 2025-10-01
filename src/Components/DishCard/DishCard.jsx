import { useState } from "react";
import "./DishCard.css";

function DishCard({
  name,
  desripcion,
  precio,
  img,
  onAddFavorite,
  onRemoveFavorite,
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    if (isFavorite) {
      onRemoveFavorite();
    } else {
      onAddFavorite();
    }
    setIsFavorite(!isFavorite); //cambia el estado
  };
  return (
    <div className="dish-card">
      <div className="card-image">
        <img src={img} alt={name} />
        <button
          className={`favorite-btn ${isFavorite ? "favorite" : ""}`}
          onClick={toggleFavorite}
          aria-label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>
      <div className="card-content">
        <h3 className="dish-name">{name}</h3>
        <p className="dish-description">{desripcion}</p>

        <div className="card-footer">
          <span className="price">${precio.toFixed(2)}</span>
          <button className="order-btn">Pedir ahora</button>
        </div>
      </div>
    </div>
  );
}

export default DishCard;
