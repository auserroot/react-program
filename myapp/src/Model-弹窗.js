import React, { Component } from "react";
import Model from "./Model.jsx";
export default class App extends Component {
  state = {
    active: false,
  };
  handelClick = () => {
    this.setState({
      active: !this.state.active,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handelClick}>弹窗</button>
        <Model
          active={this.state.active}
          handelClick={this.handelClick}
        ></Model>
      </div>
    );
  }
}
