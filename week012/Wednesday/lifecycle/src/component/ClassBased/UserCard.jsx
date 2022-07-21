import React, { Component } from "react";

export default class UserCard extends Component {
  componentWillUnmount() {
    console.log("Component will unmount in UserCard!");
  }
  render() {
    return (
      <>
        <img src={this.props.userInfo?.picture.large} />
        <p>{this.props.userInfo?.name.first}</p>
        <p>{this.props.userInfo?.dob.age}</p>
      </>
    );
  }
}
