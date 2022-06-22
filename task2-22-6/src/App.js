import { Component } from "react";

const names = ["Khozama", "Mohammad", "Lujain", "Nada", "Ayman"];
const Fruits = [
  { id: 1, name: "Apple", color: "Yellow" },
  { id: 2, name: "Strawberry", color: "Red" },
  { id: 3, name: "Kiwi", color: "Green" },
];
const alphabet = ["Z", "A", "Q", "B", "C", "Y", "S", "W"];
console.log(alphabet.sort());

export class App extends Component {
  state = {
    search: "",
    filter: names,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.setState({
        filter: names.filter((name) =>
          name.toLowerCase().includes(this.state.search.toLowerCase())
        ),
      });
    }
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>color</th>
            </tr>
          </thead>
          {Fruits.map((fruite) => {
            return (
              <tbody key={fruite.id}>
                <tr>
                  <td>{fruite.id}</td>
                  <td>{fruite.name}</td>
                  <td>{fruite.color}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
        <input
          value={this.state.search}
          onChange={(e) =>
            this.setState({ ...this.state, search: e.target.value })
          }
          type="text"
        />
        {this.state.filter?.map((name) => {
          return <div key={name}>{name}</div>;
        })}
      </div>
    );
  }
}

export default App;
