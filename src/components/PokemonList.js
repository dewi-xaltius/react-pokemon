import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);  // State to hold Pokémon names

  // Fetch Pokémon data when the component mounts
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
        setPokemon(response.data.results);  // Set the Pokémon data
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchPokemon();
  }, []);  // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <h1>Pokémon List</h1>
      <ul>
        {pokemon.map((poke, index) => (
          <li key={index}>{poke.name}</li>  // Display Pokémon name
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
