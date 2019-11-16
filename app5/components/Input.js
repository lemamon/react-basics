class Input extends React.Component {
  render() {
    return (
      <input
        onChange={this.props.getValue}
        type="text"
        id="myInput"
        placeholder="Title.."
      />
    );
  }
}
