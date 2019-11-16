class Header extends React.Component {
  state = {
    value: "",
    inputRef: {}
  };

  getRef = inputRef => {
    this.setState({ inputRef });
  };

  add = () => {
    this.props.add(this.state.inputRef.value);
    this.state.inputRef.value = "";
  };

  render() {
    return (
      <div id="myDIV" className="header">
        <h2>My To Do List</h2>
        <Input getRef={this.getRef} />
        <Button onClick={this.add} />
      </div>
    );
  }
}
