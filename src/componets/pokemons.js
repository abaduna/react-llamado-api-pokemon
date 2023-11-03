
import { usePokemon } from './../PokemonContex'// Asegúrate de que la ruta sea correcta


const Pokemons=() =>{
    const { pokemonData } = usePokemon();
      // Asigna pokemonData a data
        const data = pokemonData;




    let content;
    if (data) {
        const { count, next, previous, results } = data;
        content = results ? (
          <div>
            <h2>Total Count: {count}</h2>
            <ul>
              {results.map((pokemon, index) => (
                <li key={index}>{pokemon.name}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No data available</p>
        );
      } else {
        content = <p>No llega la data</p>;
      }
  return <>{content}</>;
}

export default Pokemons

