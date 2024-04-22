import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Pokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(response => response.json())
      .then(data => {
        setPokemonList(data.results);
        setLoading(false);
      })
      .catch(error => console.error('Error adquiriendo Pokemon:', error));
  }, []);

  const handleSelectChange = (event) => {
    const selected = event.target.value;
    navigate(`/pokemon/${selected}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Pokedex</h1>
      <div className='contenedorselect'>
      <select className='selector' onChange={handleSelectChange}>
        <option value="">Seleccionar Pokemon</option>
        {pokemonList.map((pokemon, index) => (
          <option key={index} value={pokemon.name}>{pokemon.name}</option>
        ))}
      </select>
      </div>
    </div>
  );
};

export default Pokemon;
