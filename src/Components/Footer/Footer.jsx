import "./Footer.css"

const Footer = () => {
  const currentYear =new Date().getFullYear()




  return (
    <div>
        <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Che Pizaa 🍕</h3>
          <p>Serviendo los mejores platos desde 2024</p>
        </div>
        
        <div className="footer-section">
          <h4>Horarios</h4>
          <p>Lunes a Viernes: 12:00 - 23:00</p>
          <p>Sábados y Domingos: 12:00 - 00:00</p>
        </div>
        
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>📞 +34 123 456 789</p>
          <p>📧 info@elbuensabor.com</p>
          <p>📍 Calle Sabrosa, 123, Madrid</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} El Buen Sabor. Todos los derechos reservados.</p>
      </div>
    </footer>


      
    </div>
  )
}

export default Footer
