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

  handleViewAll = () => {
    
  }
  


//RENDER
  render() {
     return (
    <div>
      <li>{console.log(this.state.apiData.next.{results: name})}</li>
     
      <Results 
      onInput={this.handlePokeInput}
      onSubmit={this.handleSubmit.bind(this)}
      onViewAll ={this.handleViewAll}
      pokemonData ={this.state.pokemonData}/>

    </div>
  );
}
}
 
export default App;
