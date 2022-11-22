import React from "react";
import "../passwordStrenght.css";


const regex = new RegExp("(?=.{8,})");

class PasswordStrength extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: "white",
    };
    this.analyze = this.analyze.bind(this);
  }

  analyze(event) {
    if (regex.test(event.target.value)) {
      this.setState({ backgroundColor: "#0F9D58" });
    } else {
      this.setState({ backgroundColor: "#DB4437" });
    }
  }

  render() {
    return (
      <div
        style={{ backgroundColor: this.state.backgroundColor }}
        class="txt_field"
      >
        <input
          name="password"
          type="password"
          minlength="8"
          onChange={this.analyze}
          required
        ></input>
        <span></span>
        <label>Password (8 or more characters)</label>
      </div>
    );
  }
}

export default PasswordStrength;
