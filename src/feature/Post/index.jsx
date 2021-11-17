import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import {Redirect} from "react-router-dom";

PostFeature.propTypes = {};

function PostFeature() {
  // set path params
  const match = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:postId`} component={DetailPage} />
      </Switch>
    </>
  );
}

export default PostFeature;
