function PokemonItem({pokemon}){
    console.log(pokemon)
    return(
    <div className="pokemon-Card"> 
            <p> {pokemon.name}</p>
            <img src={pokemon.image}/>
            <p> Type : {pokemon.type}</p>
    </div>
    )
}
export default PokemonItem