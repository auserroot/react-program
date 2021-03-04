import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const Home = () => {
  return <h1>Home</h1>;
};
const Info = () => {
  return <h1>Info</h1>;
};
const About = () => {
  return <h1>About</h1>;
};
const PageNotFund = () => {
  return <h1>PageNoFund</h1>;
};

export default class App extends Component {
  render() {
    return (
      <Router>
        <Link to="/">Home</Link>
        <Link to="/info">Info</Link>
        <Link to="/about">About</Link>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/info" component={Info}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/404" component={PageNotFund}></Route>
          {/* 404 路由重定向 */}
          <Redirect to="/404"></Redirect>
        </Switch>
      </Router>
    );
  }
}
