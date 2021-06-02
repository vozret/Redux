// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

// it wants an object as an argument
// it is preparing a slice of our global state
// when we have different pieces od state which are not directly related
// every slice needs a name
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
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

// this is an object full of keys
// where the key names match the method names
// counterSlice.actions.toggleCounter

// configure store expects a configuration object
// one reducer because redux wants one main reducer func which is responsible
// for the global state
// if we have multiple state slices, alternatively, we could set object with prop names of our choice
// values of those keys would be different reducer funcs
// we would create a map of reducers
const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     // never do this!!!! always return a new object
//     // never mutate the existing state!!!
//     // objects are reference types
//     // state.counter++;
//     // return state;
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   // often a dispatch action carries extra data
//   if (action.type === "increase") {
//     return {
//       // we overwrite the old state
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);
