import React, { Component } from "react";

class Child extends Component {
  sendMsg = () => {
    this.props.getMsg("hello");
  };
  render() {
    return (
      <div>
        <span>App子组件</span>
        <br />
        <span>父传子：{this.props.msg}</span>
        <br />
        <button onClick={this.sendMsg}>传值给App父组件传值</button>
      </div>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
    };
  }
  getMsg = (v) => {
    this.setState({
      msg: v,
    });
  };
  render() {
    return (
      <div>
        <Child msg={"hi"} getMsg={this.getMsg}></Child>
        <span>子传父：{this.state.msg}</span>
      </div>
    );
  }
}
