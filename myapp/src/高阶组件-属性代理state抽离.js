import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <h3 onClick={this.props.handleClick}>{this.props.msg}</h3>
      </div>
    );
  }
}

function HigherOrderComponent(WarpApp) {
  return class Demo extends Component {
    state = {
      msg: "hi",
    };
    handleClick = () => {
      console.log("属性代理");
      this.setState({
        msg: "hello",
      });
    };
    render() {
      return (
        <WarpApp msg={this.state.msg} handleClick={this.handleClick}></WarpApp>
      );
    }
  };
}

export default HigherOrderComponent(App);
