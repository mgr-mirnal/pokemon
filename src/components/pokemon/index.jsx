import { useState,useEffect } from "react";
import './index.css'
function PokemonItem({pokemon}){
    const[pokemonDetails,setPokemonDetails] = useState({sprites:"", types: []})
    const [typeNames, setTypeNames] = useState([]);
    
      useEffect(() => {
        fetchPokemonDetails()
      }, [])

      useEffect(() => {
        if (pokemonDetails.types.length > 0) {
          const extractedTypeNames = pokemonDetails.types.map(typeObj => typeObj.type.name);
          setTypeNames(extractedTypeNames);
        }
      }, [pokemonDetails.types]);
    
    const fetchPokemonDetails = async() => {
        const response = await fetch(pokemon.url)
        const card = await response.json();
        setPokemonDetails(card)
        };
       function getBackgroundColor(typeName) {
        switch (typeName.toLowerCase()) {
          case 'fire':
            return 'red';
          case 'water':
            return 'blue';
          case 'poison':
            return 'purple';
          case 'grass':
            return 'green';
          default:
            return 'transparent';
        }
      }
    return(
    <div className="pokemon-Card"> 
        <div className="card-Header">
            <h4>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }</h4>
        </div>
        <div className="card-image">
            <img src={pokemonDetails.sprites.front_default} />
        </div>
        <div className="type-Continer">
        <ul className="types">
            {typeNames.map((typeNames, index) => (<ul className="" key = {index} style={{ backgroundColor: getBackgroundColor(typeNames)}}> {typeNames}</ul>))}
        </ul>
        </div>
        
    </div>
    )
}
export default PokemonItem