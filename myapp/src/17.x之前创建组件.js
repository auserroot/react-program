import React from 'react'

export default function App() {
  // jsx语法糖
// 17.x 之前 React.createElement("标签名",属性,文本|组件|数组) 
// https://zh-hans.reactjs.org/docs/react-api.html#createelement
  // return <h1>(✪ω✪)</h1>
  return React.createElement("h1",{},"ヽ(ー_ー)ノ")
}
