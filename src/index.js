import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Human extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ki"
    };
  }

  render() {
    return (
      <h2 onClick={this.onbuttonClick}>
        {this.state.name} {this.props.age}
      </h2>
    );
  }
  // メソッドについてはthisがあやふやなのでarrow関数で描く
  onbuttonClick = () => {
    this.setState({ name: this.state.name + 1 });
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Human age="30" />, rootElement);
