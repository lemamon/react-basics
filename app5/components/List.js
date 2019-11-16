class List extends React.Component {
  render() {
    return (
      <ul id="myUL">
        {this.props.items.map((el, idx) => (
          <Item
            isChecked={el.status}
            key={idx}
            index={idx}
            updateList={this.props.updateList}
            removeItem={this.props.removeItem}
          >
            {el.name}
          </Item>
        ))}
      </ul>
    );
  }
}
