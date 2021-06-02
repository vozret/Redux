import React from "react";

import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Auth />
      <Counter />
    </React.Fragment>
  );
}

export default App;
