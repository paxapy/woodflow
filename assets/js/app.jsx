
class BoatItem extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.id}</span>
        <span>{this.props.title}</span>
        <span>{this.props.type}</span>
      </div>
    );
  }
}

class BoatsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { boats: [] };
  }

  componentDidMount() {
    this.serverRequest =
      axios
        .get("/boats")
        .then((result) => {
           this.setState({ boats: result.data });
        });
  }

  render() {
    const boats = this.state.boats.map((boat, i) => {
      return (
        <BoatItem key={i} id={boat.Id} title={boat.Title} type={boat.Type} />
      );
    });

    return (
      <div>{boats}</div>
    );
  }
}

ReactDOM.render( <BoatsList/>, document.querySelector("#root"));``
