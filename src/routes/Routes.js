import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Films from '../containers/films/Films';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Films} />
            </Switch>
        </ BrowserRouter>
    );
};

export default Routes;