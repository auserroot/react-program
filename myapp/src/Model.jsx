import React, { Component } from "react";
import "./Model.scss";
import ReactDom from "react-dom";
export default class Model extends Component {
  render() {
    return ReactDom.createPortal(
      <div>
        <div className={this.props.active ? "model " : "model hidden"}>
          <div className="modelItem">
            <div className="title">
              <h2>提示</h2>
              <i onClick={this.props.handelClick}>X</i>
            </div>
            <div className="msg">这是一段提示信息</div>
            <div className="actionBtn">
              <button onClick={this.props.handelClick}>取消</button>
              <button
                onClick={this.props.handelClick}
                className={this.props.active ? "active" : ""}
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
