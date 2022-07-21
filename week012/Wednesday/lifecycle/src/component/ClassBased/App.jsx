import { Component } from "react";
import "./App.css";
import UserCard from "./UserCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      color: "green",
      show: true,
    };
  }

  async fetchUser() {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    this.setState({ ...this.state, user: data.results[0] });
  }

  componentDidMount() {
    console.log("Component did mount!");
    this.fetchUser();
    this.setState({ ...this.state, color: "red" });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update!");
    console.log(`PrevState is ${prevState} `);
  }

  componentWillUnmount() {
    console.log("Component will unmount!");
  }

  render() {
    return (
      <div className="App">
        <h4 style={{ color: this.state.color }}>Lifecycle</h4>
        {this.state.show && <UserCard userInfo={this.state.user} />}
        <button onClick={() => this.fetchUser()}>Load User</button>
        <button
          onClick={() =>
            this.setState((prevState) => ({
              ...this.state,
              show: !prevState.show,
            }))
          }
        >
          {this.state.show ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

export default App;
