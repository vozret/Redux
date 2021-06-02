import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

// it wants an object as an argument
// it is preparing a slice of our global state
// when we have different pieces od state which are not directly related
// every slice needs a name
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  // a map of all the reducers this state slice needs
  reducers: {
    // every method recieves the latest state
    // they will be called by redux
    // they dont need to accept the action , but the methods will recieve an action (used for payload)
    increment(state) {
      // here, we are allowed to mutate the state
      // we still must not manipulate the existing state
      // but we won't do it accidentally
      // the toolkit will automatically create the new state with new values
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      // we need extra data
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;
