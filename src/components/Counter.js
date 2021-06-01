// useSelector hook is a hook by react for work with the redux
import { useSelector } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  // we pass a function to useSelector which will be used by redux
  // this function determines which part of the state we want to extract from the store
  // we send a state managed by redux and we recieve a part of the state we need
  // when we use useSelector, redux will automatically set a subscription to the redux store for this component
  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
