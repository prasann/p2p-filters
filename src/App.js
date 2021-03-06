import React, { Component } from "react";
import Standalone from "./Standalone";
import ChooserApp from "./p2p/ChooserApp";
import ViewerApp from "./p2p/ViewerApp";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/cats" component={Standalone} />
          <Route exact path="/cats/chooser" component={ChooserApp} />
          <Route exact path="/cats/viewer" component={ViewerApp} />
        </div>
      </Router>
    );
  }
}

export default App;
