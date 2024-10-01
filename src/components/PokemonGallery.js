import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonGallery = () => {
  const [pokemonDetails, setPokemonDetails] = useState([]); // State to hold Pokémon details

  // Fetch Pokémon names and details when the component mounts
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        // Fetch the first 20 Pokémon names and URLs
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
        const pokemonData = response.data.results;

        // For each Pokémon, fetch its detailed data (including image)
        const detailedPokemonPromises = pokemonData.map(async (poke) => {
          const detailedResponse = await axios.get(poke.url);  // Fetch Pokémon details
          return detailedResponse.data;  // Return the detailed Pokémon data
        });

        // Wait for all the detailed data to be fetched
        const detailedPokemon = await Promise.all(detailedPokemonPromises);
        setPokemonDetails(detailedPokemon);  // Store the detailed data in the state
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
      }
    };

    fetchPokemon();
  }, []);  // Empty array means this effect runs only once on mount

  return (
    <div>
      <h1>Pokémon Gallery</h1>
      <div className="pokemon-list">
        {pokemonDetails.map((poke, index) => (
          <div key={index} className="pokemon-card">
            <img src={poke.sprites.front_default} alt={poke.name} />
            <p>{poke.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonGallery;
