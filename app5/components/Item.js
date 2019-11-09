class Item extends React.Component {
  state = {
    isChecked: false
  };

  handleClick = e => {
    e.preventDefault();
    const { isChecked } = this.state;

    this.setState({ isChecked: !isChecked });
  };

  render() {
    const { isChecked } = this.state;
    const { children } = this.props;

    return (
      <li onClick={this.handleClick} className={isChecked ? "checked" : ""}>
        {children}
      </li>
    );
  }
}
