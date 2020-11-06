function Results(props){
    return(
        <div>
            <input type= "text" onChange={props.onInput}/>
            <button onClick={props.onSubmit}>Who's that Pokemon?</button>
            <p>Pokemon Name: {props.pokemonData.name}</p>
            <p>Pokemon Height: {props.pokemonData.height}</p>    
            <p>{/*Pokemon Type: {props.pokemonData.types[0].type.name}*/}</p>
            <p>New to Pokemon? Use the view all button to get started!</p>
            <button onClick={props.onViewAll}>View All</button>

                       
        </div>
    )
}

export default Results;
