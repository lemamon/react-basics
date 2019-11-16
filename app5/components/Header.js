class Header extends React.Component {
  state = {
    value: ""
  };

  add = () => {
    console.log("add");
  };

  getValue = ev => {
    this.setState({ value: ev.target.value });
  };

  render() {
    console.log(this.state.value);
    return (
      <div id="myDIV" className="header">
        <h2>My To Do List</h2>
        <Input getValue={this.getValue} />
        <Button onClick={this.add} />
      </div>
    );
  }
}
