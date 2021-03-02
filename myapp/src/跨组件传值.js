import React, { Component, createContext } from "react";

let {
  Provider, //提供值
  Consumer, //使用值
} = createContext();

class Demo extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Demo</h1>
        <Child></Child>
      </div>
    );
  }
}

class Child extends Component {
  render() {
    return (
      <Consumer>
        {({ msg, changeTit }) => {
          return (
            <div>
              <h1>{msg}</h1>
              <button onClick={changeTit}>changeTit</button>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default class App extends Component {
  state = {
    msg: "hello",
  };

  changeTit = () => {
    this.setState({
      msg: "hi",
    });
  };
  render() {
    return (
      <div>
        <Provider
          value={{
            msg: this.state.msg,
            changeTit: this.changeTit,
          }}
        >
          <Demo></Demo>
        </Provider>
      </div>
    );
  }
}
