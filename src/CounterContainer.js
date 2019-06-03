import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  counter: state
});

const CountComponent = ({ counter, dispatch }) => (
  <div>
    <p>{counter}</p>
    <button
      onClick={() => dispatch({ type: 'ADD' })}
    >
      ADD 1
    </button>
    <button
      onClick={() => dispatch({ type: 'ADD10' })}
    >
      ADD 10
    </button>
    <button
      onClick={() => dispatch({ type: 'REMOVE' })}
    >
      REMOVE 1
    </button>
    <button
      onClick={() => dispatch({ type: 'REMOVE10' })}
    >
      REMOVE 10
    </button>
    <button
      onClick={() => dispatch({ type: 'RESET' })}
    >
      RESET
    </button>
  </div>
);

export default connect(
  mapStateToProps
)(CountComponent);

