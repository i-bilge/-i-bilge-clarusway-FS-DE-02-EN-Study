import React, { Component } from "react";

export default class PersonClass extends Component {
  constructor() {
    super();
    this.state = { name: "John" };
    this.changeName = this.changeName.bind(this) 
  }

  // changeName() {
  //   this.setState({ name: "Mike" });
  // }

  changeName = (nameOfThePerson) => {
    this.setState({ name: nameOfThePerson });
  };

  render() {
    return (
      <div style={{ border: "2px solid orange", margin: "40px" }}>
        <h2>Name is {this.state.name}</h2>
        {/* <button onClick={this.changeName.bind(this)}>Change Name</button> NR.1 */}
        <button onClick={() => this.changeName("Mike")}>Change Name</button> NR2
        {/* <button onClick={this.changeName}>Change Name</button> NR4 */}
        {/* <button onClick={this.changeName.bind(this, "Mike")}>Change Name</button> NR4 */}
      </div>
    );
  }
}
