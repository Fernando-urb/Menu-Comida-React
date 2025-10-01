# 🍕 Menú de Comida - React

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
</div>

<div align="center">
  <h3>🍽️ Aplicación interactiva de menú de restaurante con filtros y categorías</h3>
</div>

---

## 📝 Descripción

**Menú de Comida React** es una aplicación web moderna que simula un menú digital de restaurante. Desarrollada con React, permite a los usuarios explorar diferentes platillos organizados por categorías, con filtros interactivos y una interfaz atractiva que mejora la experiencia de selección de comida.

### ¿Por qué este proyecto?
- ⚛️ Practicar manejo de estado en React
- 🎨 Implementar filtros dinámicos y categorías
- 📱 Crear UI responsive tipo aplicación de delivery
- 💡 Manejar arrays de datos complejos
- 🎯 Mejorar habilidades de componentización

---

## ✨ Características Principales

### 🍽️ **Menú Interactivo**
- Catálogo completo de platillos
- Cards atractivas con imágenes
- Información detallada de cada plato
- Precio, descripción y categoría

### 🔍 **Sistema de Filtrado**
- Filtrar por categorías (Desayuno, Almuerzo, Cena, Postres, etc.)
- Botón "Todos" para ver el menú completo
- Filtrado instantáneo sin recargar página
- Contador de platillos por categoría

### 🎨 **Diseño Atractivo**
- Layout tipo grid responsive
- Cards con imágenes de alta calidad
- Efectos hover elegantes
- Transiciones suaves
- Colores cálidos y apetitosos

### 📱 **Completamente Responsive**
- Adaptable a móviles, tablets y desktop
- Grid flexible que se ajusta al viewport
- Imágenes optimizadas
- Navegación táctil optimizada

---

## 🛠️ Tecnologías Utilizadas

<div align="center">

| Frontend | Desarrollo | Herramientas |
|----------|------------|--------------|
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) | ![VS Code](https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white) |
| ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) | ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) | ![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white) |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) | ![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black) | ![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) |

</div>

---

## 📂 Estructura del Proyecto

```
Menu-Comida-React/
├── 📁 public/
│   ├── index.html
│   └── favicon.ico
├── 📁 src/
│   ├── 📁 components/
│   │   ├── Menu.jsx
│   │   ├── MenuItem.jsx
│   │   ├── Categories.jsx
│   │   └── Title.jsx
│   ├── 📁 data/
│   │   └── menuData.js
│   ├── 📁 styles/
│   │   ├── Menu.css
│   │   ├── MenuItem.css
│   │   └── Categories.css
│   ├── 📁 assets/
│   │   └── images/
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚀 Instalación y Uso

### Prerequisitos
- Node.js (v14 o superior)
- npm o yarn

### Pasos para ejecutar

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/Fernando-urb/Menu-Comida-React.git
   ```

2. **Navega al directorio**
   ```bash
   cd Menu-Comida-React
   ```

3. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

4. **Inicia el servidor de desarrollo**
   ```bash
   npm start
   # o
   yarn start
   ```

5. **¡Explora el menú!**
   - La aplicación se abrirá en `http://localhost:3000`

### Build para producción
```bash
npm run build
# o
yarn build
```

---

## 🎥 Demo

> **¡Próximamente!** - Demo en vivo disponible pronto

---

## 🍔 Estructura de Datos

### **Formato de platillos:**

```javascript
const menuData = [
  {
    id: 1,
    title: "Hamburguesa Clásica",
    category: "almuerzo",
    price: 12.99,
    img: "./images/hamburguesa.jpg",
    desc: "Deliciosa hamburguesa con carne 100% vacuna, lechuga, tomate, cebolla y nuestra salsa especial."
  },
  {
    id: 2,
    title: "Pancakes con Miel",
    category: "desayuno",
    price: 8.50,
    img: "./images/pancakes.jpg",
    desc: "Esponjosos pancakes servidos con miel de maple, mantequilla y frutas frescas."
  },
  // ... más platillos
];
```

### **Categorías disponibles:**
- 🌅 Desayuno
- 🍽️ Almuerzo
- 🌙 Cena
- 🍰 Postres
- 🥤 Bebidas

---

## 🎯 Componentes Principales

### 🍽️ **Menu Component**
Componente principal que maneja el estado y la lógica de filtrado.

```jsx
const Menu = () => {
  const [menuItems, setMenuItems] = useState(menuData);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menuData);
      return;
    }
    const newItems = menuData.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <Categories categories={categories} filterItems={filterItems} />
      <MenuList items={menuItems} />
    </main>
  );
};
```

### 🏷️ **Categories Component**
Renderiza los botones de filtrado por categoría.

```jsx
const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      <button onClick={() => filterItems('all')}>Todos</button>
      {categories.map((category, index) => (
        <button key={index} onClick={() => filterItems(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};
```

### 🍕 **MenuItem Component**
Card individual que muestra cada platillo.

```jsx
const MenuItem = ({ id, title, category, price, img, desc }) => {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="photo" />
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <h4 className="price">${price}</h4>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};
```

---

## 🎨 Estilos y Diseño

### 🌈 **Esquema de Colores**
```css
:root {
  /* Colores principales */
  --primary-color: #ff6b35;
  --secondary-color: #f7931e;
  --accent-color: #c73e1d;
  
  /* Fondos */
  --background: #f8f9fa;
  --card-bg: #ffffff;
  
  /* Texto */
  --text-primary: #2d3436;
  --text-secondary: #636e72;
  
  /* Sombras */
  --shadow-light: rgba(0, 0, 0, 0.1);
  --shadow-medium: rgba(0, 0, 0, 0.15);
}
```

### 📱 **Responsive Breakpoints**
```css
/* Móvil */
@media screen and (max-width: 576px) {
  .section-center {
    grid-template-columns: 1fr;
  }
}

/* Tablet */
@media screen and (min-width: 768px) {
  .section-center {
    grid-template-columns: 1fr 1fr;
  }
}

/* Desktop */
@media screen and (min-width: 992px) {
  .section-center {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### ✨ **Efectos Hover**
```css
.menu-item {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.menu-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px var(--shadow-medium);
}

.photo {
  transition: transform 0.3s ease;
}

.menu-item:hover .photo {
  transform: scale(1.05);
}
```

---

## 🔧 Funcionalidades Avanzadas

### 🔍 **Búsqueda de Platillos**
```jsx
const [searchTerm, setSearchTerm] = useState('');

const filteredMenu = menuItems.filter((item) =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase())
);
```

### 💰 **Filtro por Precio**
```jsx
const filterByPrice = (maxPrice) => {
  const filtered = menuData.filter((item) => item.price <= maxPrice);
  setMenuItems(filtered);
};
```

### ⭐ **Sistema de Favoritos**
```jsx
const [favorites, setFavorites] = useState([]);

const toggleFavorite = (id) => {
  if (favorites.includes(id)) {
    setFavorites(favorites.filter((favId) => favId !== id));
  } else {
    setFavorites([...favorites, id]);
  }
};
```

---

## 📊 Características de UX

### 🎯 **Loading States**
- Skeleton screens mientras carga
- Indicadores de carga visuales
- Feedback inmediato al usuario

### 🎨 **Animaciones**
- Fade in al cargar platillos
- Smooth transitions entre filtros
- Hover effects elegantes
- Loading spinners

### ♿ **Accesibilidad**
- Semantic HTML
- Alt text en imágenes
- ARIA labels en botones
- Navegación por teclado
- Contraste adecuado

---

## 🍽️ Casos de Uso

Esta aplicación es perfecta para:

- 🍕 **Restaurantes:** Menú digital interactivo
- 🚚 **Apps de Delivery:** Catálogo de productos
- 🏪 **Cafeterías:** Showcase de bebidas y comidas
- 📱 **Food Trucks:** Menú móvil responsive
- 🎓 **Proyectos Educativos:** Aprender React con datos reales

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Para colaborar:

1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

### Ideas para contribuir:
- 🔍 Añadir barra de búsqueda
- 💰 Implementar filtro por precio
- ⭐ Sistema de calificaciones
- 🛒 Carrito de compras
- 🌍 Soporte multi-idioma
- 🎨 Más temas de colores
- 📊 Dashboard de estadísticas

---

## 🚀 Próximas Mejoras

- [ ] Integración con backend (API REST)
- [ ] Sistema de pedidos
- [ ] Carrito de compras funcional
- [ ] Persistencia con LocalStorage
- [ ] Autenticación de usuarios
- [ ] Panel de administración
- [ ] Notificaciones push
- [ ] Modo oscuro

---

## 📚 Recursos y Referencias

- ⚛️ [React Documentation](https://reactjs.org/)
- 🎨 [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📱 [Responsive Design Best Practices](https://web.dev/responsive-web-design-basics/)
- 🍕 [Food Photography Tips](https://www.foodphotographyschool.com/)

---

## 🏆 Características Técnicas

- **Component-based:** Arquitectura modular y reutilizable
- **State Management:** Manejo eficiente con Hooks
- **Performance:** Optimizado con React.memo
- **Responsive:** Mobile-first approach
- **Accessible:** WCAG 2.1 compliant
- **Modern JavaScript:** ES6+ features

---

## 👨‍💻 Autor

**Fernando Urbano**

[![GitHub](https://img.shields.io/badge/GitHub-Fernando--urb-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Fernando-urb)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ufer2025-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/ufer2025)
[![Email](https://img.shields.io/badge/Email-fernando__urbano%40outlook.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:fernando_urbano@outlook.com)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">
  <img src="https://komarev.com/ghpvc/?username=Fernando-urb&color=orange&style=flat-square&label=Visitas+al+repositorio"/>
</div>

<div align="center">
  
  **"La buena comida merece una buena presentación"** 🍽️✨
  
</div>

---

⭐ **¡Si te gustó este proyecto, dale una estrella!** ⭐
