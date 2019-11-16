class Item extends React.Component {
  handleClick = e => {
    e.preventDefault();

    const { isChecked } = this.props;

    if (isChecked === "new") {
      this.props.updateList(this.props.index);
    } else {
      this.props.removeItem(this.props.index);
    }
  };

  render() {
    const { children, isChecked } = this.props;

    return (
      <li onClick={this.handleClick} className={isChecked}>
        {children}
      </li>
    );
  }
}
