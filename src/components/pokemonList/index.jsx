import PokemonItem from "../pokemon"

function PokemonList({pokemons}){
    console.log("okok")
    return(
        <div className="pokemon-container">
            <ul className="pokemon-list">
            {pokemons.map((pokemon, i) => <PokemonItem pokemon={pokemon} key={i} />)}
            </ul>
        </div>
    )
 
}
export default PokemonList