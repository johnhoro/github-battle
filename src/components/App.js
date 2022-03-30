import React from "react";
import Battle from "./Battle";
import Github from "./Github-Stark";
import "../style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      battle: [],
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/battle">
            <Battle />
          </Route>
          <Route path="/">
            <Github />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
