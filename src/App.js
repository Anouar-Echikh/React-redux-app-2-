import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="col">
          <h2>
            <span>A:</span>
            <span>{this.props.a}</span>
          </h2>
          <br />
          <button onClick={() => this.props.updateA(this.props.b)}>
            Update A
          </button>
        </div>
        <div class="col">
          <h2>
            <span>B:</span>
            <span>{this.props.b}</span>
          </h2>
          <br />
          <button onClick={() => this.props.updateB(this.props.a)}>
            Update B
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = store => {
  return {
    a: store.rA.a,
    b: store.rB.b
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updateA: b => dispatch({ type: "UPDATE_A", b }),
    updateB: a => dispatch({ type: "UPDATE_B", a })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
