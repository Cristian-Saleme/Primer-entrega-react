import React from 'react';

const NavBar = () => {
  const handleClick = (category) => {
    console.log('Categoría seleccionada:', category);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand">TIENDA NUEVA</span>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <button className="nav-link btn btn-link" onClick={() => handleClick('Categoría 1')}>
              Inicio
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-link" onClick={() => handleClick('Categoría 2')}>
              Catalogo
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
