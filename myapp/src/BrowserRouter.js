import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => {
  return <h1>Home</h1>;
};
const Info = () => {
  return <h1>Info</h1>;
};
const About = () => {
  return <h1>About</h1>;
};



export default class App extends Component {
  render() {
    return (
      <Router>
        <Link to="/">Home</Link>
        <Link to="/info">Info</Link>
        <Link to="/about">About</Link>

        <Route path="/" exact component={Home}></Route>
        <Route path="/info" component={Info}></Route>
        <Route path="/about" component={About}></Route>
      </Router>
    );
  }
}
