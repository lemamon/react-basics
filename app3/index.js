class App extends React.Component {
  render() {
    return <p>olá</p>;
  }
}

const domContainer = document.querySelector("#root");
ReactDOM.render(<App />, domContainer);
