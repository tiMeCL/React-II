import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) {
          throw new Error('Error adquiriendo Data');
        }
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error('Error adquiriendo Caracteristicas de Pokemon:', error);
      }
    };

    fetchPokemonDetails();
  }, [id]);

  if (!pokemon) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Caracteristicas de {pokemon.name}</h1>
      <div className='contenedorpoke'>
        <img className='imagen' src={pokemon.sprites.front_default} alt={pokemon.name} />
        <div className='datospoke'>
        <p>HP: {pokemon.stats.find(stat => stat.stat.name === 'hp').base_stat}</p>
        <p>Attack: {pokemon.stats.find(stat => stat.stat.name === 'attack').base_stat}</p>
        <p>Defense: {pokemon.stats.find(stat => stat.stat.name === 'defense').base_stat}</p>
        <p>Special Attack: {pokemon.stats.find(stat => stat.stat.name === 'special-attack').base_stat}</p>
        <p>Special Defense: {pokemon.stats.find(stat => stat.stat.name === 'special-defense').base_stat}</p>
        <p>Speed: {pokemon.stats.find(stat => stat.stat.name === 'speed').base_stat}</p>
        <p>Type: {pokemon.types.map(type => type.type.name).join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
