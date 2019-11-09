import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/Person';
import Border from './components/Border';

const falar = (msg) =>{
  console.log(msg);
  alert(msg);
}

class App extends React.Component {
  render() {
    return (  
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
    
          <Border>
            <Person falar={() => console.log("oi")} personName="Juan" idade={10} />
          </Border>
          
          <Border>
            <Person falar={() => alert("oi")} personName="Daniel" idade={16} />
          </Border>
         
          <Border>
            <Person falar={() => falar("ola")} personName="Kevin"  idade={21}/>
          </Border>
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
