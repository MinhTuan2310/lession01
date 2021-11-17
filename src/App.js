import { Route, Switch } from "react-router";
import "./App.css";
import PostFeature from "./feature/Post";
import {Redirect} from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <Switch>
          <Redirect exact from="/" to="/posts" />
          <Route path="/posts" component={PostFeature}  />
      </Switch>
    </div>
  );
}

export default App;
