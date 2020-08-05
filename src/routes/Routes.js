import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FilmsProvider } from "../store/films";
import Films from "../containers/films/Films";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <FilmsProvider>
          <Route path="/" exact={true} component={Films} />
        </FilmsProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
