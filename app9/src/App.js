import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    users: []
  };

  getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users/jj")
      .then(resp => resp.json())
      .then(users => this.setState({ users }))
      .catch(error => console.log(error));
  };

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const { users } = this.state;
    return (
      <div className="App">
        {users.map(user => (
          <h1 key={user.id}>{user.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
