import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <h3 onClick={this.props.handleClick}>hi</h3>
      </div>
    );
  }
}

function HigherOrderComponent(WarpApp) {
  return class Demo extends Component {
    handleClick = () => {
      console.log("属性代理");
    };
    render() {
      let devalue = {
        msg: "hello",
      };
      return <WarpApp {...devalue} handleClick={this.handleClick}></WarpApp>;
    }
  };
}

export default HigherOrderComponent(App);
