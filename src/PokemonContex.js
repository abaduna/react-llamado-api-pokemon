import React, { createContext, useContext, useState } from 'react';

const PokemonContext = createContext();

export function usePokemon() {
  return useContext(PokemonContext);
}

export function PokemonProvider({ children }) {
  const [pokemonData, setPokemonData] = useState(null);

  const updatePokemonData = (data) => {
    setPokemonData(data);
  };

  return (
    <PokemonContext.Provider value={{ pokemonData, updatePokemonData }}>
      {children}
    </PokemonContext.Provider>
  );
}
