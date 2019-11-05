import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Provider from '../store/config/Provider';
import Films from '../containers/films/Films';


const Routes = () => {
    return (
        <Provider>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={Films} />
                </Switch>
            </ BrowserRouter>
        </Provider>
    );
};

export default Routes;