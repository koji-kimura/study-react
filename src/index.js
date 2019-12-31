import React from "react";
import { render } from "react-dom";

// 冒頭を大文字にしてカスタムタグのような記法でコンポーネントになる
const ReturnReactElement = ({ name, music }) => {
  return (
    <h2>
      {name}
      {music}
    </h2>
  );
};

// 関数だから実行するために()が必要
render(
  <ReturnReactElement name="test" music="jazz" />,
  document.getElementById("root")
);
