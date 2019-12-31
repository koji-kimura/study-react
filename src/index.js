import React from "react";
import { render } from "react-dom";

// const returnReactElement = () => {
//   return <h2>test</h2>;
// };

const returnReactElement2 = text => {
  return <h2>{text}</h2>;
};

// 関数だから実行するために()が必要
render(returnReactElement2("こんにちは"), document.getElementById("root"));
