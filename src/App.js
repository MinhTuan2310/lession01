import { Route, Switch } from "react-router";
import "./App.css";
import PostFeature from "./feature/Post";
import {Redirect} from "react-router-dom";
import React from "react";
import DetailPage from "./feature/Post/pages/DetailPage";

function App() {
  return (
    <div className="App">
      <Switch>
          <Redirect exact from="/" to="/posts" />
          <Route path="/posts" component={PostFeature}  />
          <Route path="/posts/:id" component={DetailPage} />
      </Switch>
    </div>
  );
}

export default App;
