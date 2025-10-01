import "./Header.css";

const Header = ({ restaurantName , favoriteCount }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          {/* menu  */}
          <h1>{restaurantName}</h1>
        </div>
        <div className="logo">❤️ Favoritos :{favoriteCount}</div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#menu"></a>Menu
            </li>
            <li>
              <a href="#nosotros"></a>Nosotros{" "}
            </li>
            <li>
              <a href="#contacto"></a>contacto
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
