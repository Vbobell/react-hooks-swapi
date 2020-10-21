import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { FilmsProvider } from '../provider/films';
import Films from '../containers/films/Films';
import { Provider as GraphqlProvider } from 'urql';
import { client } from '../services/api/SwApi';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <GraphqlProvider value={client}>
          <FilmsProvider>
            <Route path="/" exact={true} component={Films} />
          </FilmsProvider>
        </GraphqlProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
