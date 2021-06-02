// useSelector hook is a hook by react for work with the redux
// useDispatch hook is used for wiring the component with the redux dispatch functions (actions). it returns a function
// connect is a redux function made for class-based components
import React from "react";
import { useSelector, useDispatch /* , connect*/ } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  // we pass a function to useSelector which will be used by redux
  // this function determines which part of the state we want to extract from the store
  // we send a state managed by redux and we recieve a part of the state we need
  // when we use useSelector, redux will automatically set a subscription to the redux store for this component
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends React.Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// // first function maps redux state to props which will be recieved by components
// // equivalent to useSelector
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// // equivalent to useDispatch
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// we execute the connect function
// it then returns a new function and we execute this new function as well
// connect wants two arguments, both are functions
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
