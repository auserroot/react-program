import React, { Component } from "react";

class Child1 extends Component {
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

class Child2 extends Component {
  render() {
    return (
      <div>
        <h2>{"兄弟组件传值: " + this.props.msg}</h2>
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
        <Child1 msg={"hi"} getMsg={this.getMsg}></Child1>
        <span>子传父：{this.state.msg}</span>
        <Child2 msg={this.state.msg}></Child2>
      </div>
    );
  }
}
