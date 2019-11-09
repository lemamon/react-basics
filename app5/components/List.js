class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ["tomate", "Couve", "maçã", "uva"]
    };
  }
  render() {
    return (
      <ul id="myUL">
        {this.state.items.map((el, idx) => (
          <Item key={idx}>{el}</Item>
        ))}
      </ul>
    );
  }
}
