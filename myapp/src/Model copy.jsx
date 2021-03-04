import React, { Component } from "react";
import "./Model.scss";
import ReactDom from "react-dom";
export default class Model extends Component {
  state = {
    active: false,
    action_state: false,
  };

  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextState.action_state) {
      return { action_state: false };
    } else {
      return {
        active: nextProps.active || false,
      };
    }
  }
  handelClick = () => {
    if (this.props.handelClick) {
      this.props.handelClick();
    } else {
      this.setState({
        action_state: true,
        active: false,
      });
    }
  };
  render() {
    return ReactDom.createPortal(
      <div>
        <div className={this.state.active ? "model " : "model hidden"}>
          <div className="modelItem">
            <div className="title">
              <h2>提示</h2>
              <i onClick={this.handelClick}>X</i>
            </div>
            <div className="msg">这是一段提示信息</div>
            <div className="actionBtn">
              <button onClick={this.handelClick}>取消</button>
              <button
                onClick={this.handelClick}
                className={this.state.active ? "active" : ""}
              >
                确定
              </button>
            </div>
          </div>
        </div>
      </div>,
      document.body
    );
  }
}
