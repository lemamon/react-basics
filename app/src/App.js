import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person'

class App extends React.Component {
  render() {
    return (  
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Person personName="Juan" idade={10} />
          <Person personName="Daniel" idade={16} />
          <Person personName="Kevin"  idade={21}/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


export default App;
