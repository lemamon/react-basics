import React from "react";
import "./App.css";
import Stack from "./components/Stack";
import { getUsers } from "./components/Api";
class App extends React.Component {
  state = {
    users: [],
    loading: true,
    error: null
  };

  getUsers = () => {
    getUsers()
      .then(users => this.setState({ users, loading: false }))
      .catch(error => this.setState({ error, loading: false }));
  };

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const { users, loading, error } = this.state;
    return (
      <div className="App">
        {error ? (
          <h1>error!!!</h1>
        ) : loading ? (
          <h1>loading...</h1>
        ) : (
          <Stack users={users} />
        )}
      </div>
    );
  }
}

export default App;
