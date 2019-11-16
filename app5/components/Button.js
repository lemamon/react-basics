class Button extends React.Component {
  render() {
    return (
      <span onClick={this.props.onClick} className="addBtn">
        Add
      </span>
    );
  }
}
