// hook    https://zh-hans.reactjs.org/docs/hooks-reference.html#usestate
import { useState } from "react";
function App() {
  let [num, setNum] = useState(123);
  // num 是初始值
  // setNum 是改变值的方法
  // https://zh-hans.reactjs.org/docs/hooks-rules.html

  return <h1>{num}</h1>;
}

export default App;
