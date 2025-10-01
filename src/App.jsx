import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import DishCard from "./Components/DishCard/DishCard";
import "./index.css";

function App() {
  const [dishes, setdishes] = useState([
    {
      id: 1,
      name: "Ternera",
      descripcion: "Pizza de ternera con muzarella y morron",
      precio: 15000,
      img: "https://elhuerto20.wordpress.com/wp-content/uploads/2013/03/pizza-queso1.jpg",
    },
    {
      id: 2,
      name: "fugazetta",
      descripcion: "Pizza con cebolla y morron",
      precio: 13000,
      img: "https://cocinerosargentinos.com/content/recipes/500x500/recipes.18579.jpg",
    },
    {
      id: 3,
      name: "especial",
      descripcion: "Pizza con jamon queso morron",
      precio: 13000,
      img: "https://imag.bonviveur.com/pizza-napolitana.webp",
    },
  ]);

  const [favoriteCount, setfavoriteCount] = useState(0);

  const addToFavorites = () => {
    setfavoriteCount(favoriteCount + 1);
  };

  const removeFromFavorites = () => {
    setfavoriteCount(favoriteCount - 1);
  };

  return (
    <>
      <Header restaurantName=" 🍕 Che pizza" favoriteCount={favoriteCount} />
      {/* Main  */}
      <main className="main-content">
        <h2>Nuestro Menu</h2>
        <div className="dishes-grid">
          {/* cards con los platos  */}
          {dishes.map((dish) => (
            <DishCard
              key={dish.id}
              name={dish.name}
              descripcion={dish.descripcion}
              precio={dish.precio}
              img={dish.img}
              // funciones para agregar y quitar 
              onAddFavorite={addToFavorites}
              onRemoveFavorite={removeFromFavorites}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
