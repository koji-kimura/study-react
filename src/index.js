import React from "react";
import { render } from "react-dom";

import "./styles.css";

class H2O extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temp: 15 };
  }
  render() {
    const { temp } = this.state;
    return (
      <div className={this.H2OState(temp)}>
        <h2>
          phase: {this.H2OState(temp)} ,{temp}度
        </h2>
        <button onClick={this.addTemp}>+1</button>
        <button onClick={this.addTemp10}>+10</button>
        <button onClick={this.minusTemp}>-1</button>
        <button onClick={this.minusTemp10}>-10</button>
      </div>
    );
  }
  // 直接state参照せずに引数で判断する
  H2OState = temp => {
    if (temp >= 100) {
      return "steam";
    } else if (temp <= 0) {
      return "ice";
    } else {
      return "water";
    }
  };
  addTemp = () => {
    const { temp } = this.state;
    this.setState({ temp: temp + 1 });
  };
  minusTemp = () => {
    const { temp } = this.state;
    this.setState({ temp: temp - 1 });
  };
  addTemp10 = () => {
    const { temp } = this.state;
    this.setState({ temp: temp + 10 });
  };
  minusTemp10 = () => {
    const { temp } = this.state;
    this.setState({ temp: temp - 10 });
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<H2O />, rootElement);