

import { useState } from 'react';
import { PokemonProvider } from './PokemonContex'; // Asegúrate de que la ruta sea correcta

import  {useFech} from "./hook/useFech"
import './App.css';
import Home from './pages/home/Home';

import RoutesPrincipal from "../src/routs/index";
function App() {
  const [endpoint,setEndpoint]=useState()
  const {data,loading,error_reducer} = useFech(endpoint)

  console.log(data);

  return (
    <div className="App">
      <PokemonProvider>
        <RoutesPrincipal />
      </PokemonProvider>
      
    </div>
  );
}

export default App;
