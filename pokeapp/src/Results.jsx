function Results(props){
    return(
        <div>
            <input type= "text" onChange={props.onInput}/>
            <button onClick={props.pokemonData}>Who's that Pokemon?</button>
            <p>Pokemon Name: {props.pokemonData}</p>
            <p>Pokemon Height: {props.pokemonData.height}</p>    
            <p>{/*Pokemon Type: {props.pokemonData.types[0].type.name}*/}</p>

                       
        </div>
    )
}

export default Results
