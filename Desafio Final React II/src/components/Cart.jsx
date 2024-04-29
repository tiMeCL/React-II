import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, total, removeFromCart } = useContext(CartContext); 

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId); 
  };

  return (
    <div className="container-xl">
      <h1 className="text-center mt-5">Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p className='text-center mt-5 '>El carrito está vacío</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <img src={item.img} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                  <div className="mx-3">
                    <p className="text-uppercase">{item.name}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio unitario: ${item.price}</p>
                    <button className="btn btn-danger" onClick={() => handleRemoveFromCart(item.id)}>Eliminar del carrito</button> {/* Botón para eliminar pizzas */}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <h2 className="text-center"><strong>Total a pagar: ${total}</strong></h2>
          <div className="text-center">
            <Link to="/">Seguir comprando</Link>
            {/* Checkout button */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
