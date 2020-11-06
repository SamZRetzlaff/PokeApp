import React from 'react'
//import Form from './Form'
import Results from './Results'

class App extends React.Component {
  //CONSTRUCTOR
  constructor(props){
    super(props)
    this.state = {
      apiData: [],
      pokemonData: [],
      pokeInput: '',
      pokemonList: []
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

  async handleSubmit (event) {
    event.preventDefault();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.pokeInput}`)
    const json = await response.json()
    this.setState({pokemonData: json})
  }

  async handleViewAll (event) {
    event.preventDefault();
    for(var i = 1; i< this.state.apiData.count; i++){
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      const json = await response.json()
      this.setState({pokemonList: this.state.pokemonList.concat({pokemonList: json})})
    }
    
  }
  


//RENDER
  render() {
     return (
    <div>
      <h1>Poke App</h1>
      <li>Test Bed: {console.log(this.state.apiData)}</li>
     
      <Results 
      onInput={this.handlePokeInput}
      onSubmit={this.handleSubmit.bind(this)}
      onViewAll ={this.handleViewAll.bind(this)}
      pokemonData ={this.state.pokemonData}/>

    </div>
  );
}
}
 
export default App;
