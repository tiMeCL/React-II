import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const PizzaCatalog = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('src/assets/pizzas.json')
      .then(response => response.json())
      .then(data => {
        setPizzas(data);
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to load pizzas");
        setLoading(false);
        console.error(err);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container-sm">
      <div className="row">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={pizza.img} className="card-img-top" alt={pizza.name} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{pizza.name.toUpperCase()}</h5>
                <p className="card-text">${pizza.price}</p>
                <div className="d-flex justify-content-between">
                  <Link to={`/pizza/${pizza.id}`} className="btn btn-primary">Ver detalles</Link>
                  <button className="btn btn-success" onClick={() => addToCart (pizza)}>Agregar al carrito</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PizzaCatalog;