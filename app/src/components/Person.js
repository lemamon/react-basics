import React, { Component } from 'react'

class Person extends Component {
  constructor(props) {
    super(props)
    this.state = {
      idade: this.props.idade,
      nome: this.props.personName
    }
    
  }

  parabens = () => {
    let { idade } = this.state
    idade++
    this.setState({ idade })
  }

  render() {
    return (
      <>
        <p>Meu nome é {this.props.personName}</p>
        <p>minha idade é {this.state.idade}</p>
        {console.log("update")}
        
        <input 
          type="submit" 
          value="parabens" 
          onClick={this.parabens}/>

        <input 
            type="submit" 
            value="falar" 
            onClick={this.props.falar}/> 
      </>
    )
     
  }
}

export default Person