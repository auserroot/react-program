import React, { Component } from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import "./home.scss";
export default class Home extends Component {
  render() {
    return (
      <div className="box">
        <div className="header_box">
          <Header />
        </div>
        <div className="main_box">
          <Main />
        </div>
        <div className="footer_box">
          <Footer />
        </div>
      </div>
    );
  }
}
