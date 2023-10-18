import PokemonItem from "../pokemon"
import { useEffect, useState } from "react"
import './index.css'
function PokemonList(){
    const[pokemons,setPokemons] = useState([])

    useEffect(() => {
      fetchPokemons()
    }, [])
    
    const fetchPokemons = async() => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20`)
      const card = await response.json();
      setPokemons(card.results)
      console.log(pokemons)
  };

    return(
        <div className="pokemon-container">
            <div className="pokemon-list">
                {pokemons.map((pokemon,i) => <PokemonItem pokemon={pokemon} key={i}/>)}
            </div>
        </div>
    )
}
export default PokemonList