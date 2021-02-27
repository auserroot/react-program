import React, { Component } from "react";
import "./iconfont.css";
import "./footer.scss";

export default class Footer extends Component {
  getFooter = (params) => {
    let footer = this.state.navbars.map((v) => (
      <div className="item" key={v.id}>
        <i className={"iconfont " + v.icon}></i>
        <span className="item-txt">{v.txt}</span>
      </div>
    ));
    return footer;
  };
  state = {
    navbars: [
      {
        txt: "首页",
        icon: "icon-menu-home-normal",
        id: 1,
      },
      {
        txt: "社区",
        icon: "icon-shequ",
        id: 2,
      },
      {
        txt: "购物车",
        icon: "icon-shop-car-select",
        id: 3,
      },
      {
        txt: "我",
        icon: "icon-wode",
        id: 4,
      },
    ],
  };
  render() {
    return <div className="footer">{this.getFooter()}</div>;
  }
}
