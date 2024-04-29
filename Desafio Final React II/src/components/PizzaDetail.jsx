import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../assets/pizzas.json'; 

const PizzaDetail = () => {
    const { id } = useParams();
    const [pizza, setPizza] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const foundPizza = Data.find(p => p.id === id); 
        if (foundPizza) {
            setPizza(foundPizza);
            setLoading(false);
        } else {
            setError("Pizza no encontrada: " + id);
            setLoading(false);
        }
    }, [id]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container">
          {pizza ? (
            <div>
              <h1 className="mt-4 mb-4 text-center text-uppercase">{pizza.name}</h1>
              <div className="row">
                <div className="col-md-6">
                  <img src={pizza.img} className="img-fluid" alt={pizza.name} />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <div>
                    <p className="text-uppercase">{pizza.desc}</p>
                    <p className="text-uppercase">Ingredientes: {pizza.ingredients.join(', ')}</p>
                    <p className="text-uppercase"><strong>Precio: ${pizza.price}</strong></p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p>No pizza details available.</p>
          )}
        </div>
      );
    };
    
    export default PizzaDetail;
