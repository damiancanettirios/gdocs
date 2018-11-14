import React from "react";
import "./App.css";

import Homepage from "./components/main";

import withRoot from "./withRoot";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Homepage />
      </div>
    );
  }
}

export default withRoot(App);
