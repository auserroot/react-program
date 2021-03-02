import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <h3>hi</h3>
      </div>
    );
  }
}
function addBackground(WarpApp) {
  return class Demo extends WarpApp {
    state = {
      color: "yellow",
    };
    render() {
      return (
        <div style={{ background: this.state.color }}>
          <WarpApp></WarpApp>
        </div>
      );
    }
  };
}
export default addBackground(App);
