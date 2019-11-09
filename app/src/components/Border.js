import React, { Component } from 'react'

class Border extends Component {
 
  render() {
    
    return (
     <div style={{border: '5px solid'}}>
       {this.props.children}
     </div>
    )
     
  }
}

export default Border