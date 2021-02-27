// 类组件
// 1. class定义 继承 React.Component||React.PureComponent
// 2. 组件名大写
// 3. render 方法，返回一段jsx
import React, { Component, PureComponent } from "react";

// export default class App extends Component {
//   render() {
//     return <div>123</div>;
//   }
// }
export default class App extends PureComponent {
  render() {
    return <div>123</div>;
  }
}
