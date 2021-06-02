// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import authSlice from "./auth";

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
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

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
