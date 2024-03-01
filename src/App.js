// src/App.js
import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./actions";
import "bootstrap/dist/css/bootstrap.min.css";


const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button className="btn btn-primary" onClick={increment}>+</button> <span/>
      <button className ="btn btn-danger" onClick={decrement}>-</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};
// dispact() for redux
const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
