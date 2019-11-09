class Button extends React.Component {
  render() {
    return (
      <span onClick={() => console.log("add")} className="addBtn">
        Add
      </span>
    );
  }
}
