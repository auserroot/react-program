// import React from "react";
import "./iconfont.css";
import "./header.scss";
// 函数式组件
function Header() {
  return (
    <div className="header">
      <div className="h-left">
        <i className="iconfont icon-fenlei"></i>
      </div>
      <div className="h-mid">京西商城</div>
      <div className="h-right">
        <i className="iconfont icon-sousuo"></i>
      </div>
    </div>
  );
}

export default Header;
