import React from 'react';

const NavBar = () => {
  const handleClick = () => {
    // Lógica de la función handleClick
    console.log('Click en el botón');
  };

  return (
    <nav className="navbar">
      {/* ...contenido del Navbar */}
      <button onClick={handleClick}>Click me</button>
    </nav>
  );
};

export default NavBar;

