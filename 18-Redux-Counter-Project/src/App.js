import React from "react";
import { connect } from "react-redux";
import Counter from "./components/Counter";

export const App = (props) => {
  return (
    <div>
      <Counter
        counter={props.counter}
        onIncrement={props.onIncrement}
        onDecrement={props.onDecrement}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: "INCREMENT" }),
    onDecrement: () => dispatch({ type: "DECREMENT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
