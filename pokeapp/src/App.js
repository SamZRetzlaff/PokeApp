import React from 'react'
//import Form from './Form'
import Results from './Results'

class App extends React.Component {
  //CONSTRUCTOR
  constructor(props){
    super(props)
    this.state = {
      apiData: [],
      pokeInput: '',
    }
  }

  //METHODS
  async componentDidMount() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
    const json = await response.json()
    this.setState({apiData: json})
  }
    
  handlePokeInput = (event) => {
    event.preventDefault()
    this.setState({pokeInput: event.target.value})
  }

  // searchPoke = (event) => {
  //   event.preventDefault();
  //   this.setState({name: this.state.pokeInput})
  // } onSearch={this.searchPoke}


//RENDER
  render() {
     return (
    <div>
      <h1>Poke App</h1>
  
      <Results 
      onInput={this.handlePokeInput}
      pokemonData={/*this.state.apiData*/this.componentDidMount}/>

    </div>
  );
}

  }
 
export default App;
