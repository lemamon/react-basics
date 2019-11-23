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

  getUsers = async () => {
    try {
      const users = await getUsers();
      this.setState({ users, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  };

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const { loading, error, users } = this.state;
    return (
      <div className="App">
        {error ? (
          <h1>error!!!</h1>
        ) : loading ? (
          <h1>loading...</h1>
        ) : (
          <Stack isUser={true} data={users} />
        )}
      </div>
    );
  }
}

export default App;
