import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; 

const Navbar = () => {
  const { cartItems } = useContext(CartContext); 
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0); 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ position: 'fixed', width: '100%', zIndex: '1000' }}>
      <div className="container fluid">
        <Link className="navbar-brand" to="/">Pizzeria Cosa Nostra 🍕</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/carrito">Carrito ({totalItems})</Link> 
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;