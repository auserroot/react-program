import React, { Component } from "react";
import "./iconfont.css";
import "./headitem.scss";
class Headitem extends Component {
  state = {
    tit: "购物车",
    item: "编辑",
  };
  render() {
    return (
      <div className="header">
        <div className="h-left">
          <i className="iconfont icon-arrow-right"></i>
        </div>
        <div className="h-mid">{this.state.tit}</div>
        <div className="h-right">
          <span className="item">{this.state.item}</span>
        </div>
      </div>
    );
  }
}

export default Headitem;
