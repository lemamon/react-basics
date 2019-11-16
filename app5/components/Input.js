class Input extends React.Component {
  componentDidMount() {
    this.props.getRef(this.refs.myInput);
  }

  render() {
    return (
      <input
        ref="myInput"
        onChange={this.props.getValue}
        type="text"
        id="myInput"
        placeholder="Title.."
      />
    );
  }
}
