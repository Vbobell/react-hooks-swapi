import React, { useReducer } from 'react';
import Context from './Context';
import Middleware from './Middleware';
import filmsReducer, { filmsStore } from '../films/Films';

const Provider = props => {
    const [filmsState, dispatch] = useReducer(
        filmsReducer,
        filmsStore
    );

    const combinedReducers = {
        state: {
            ...filmsState
        },
        dispatch
    };

    return (
        <Context.Provider value={combinedReducers}>
            {props.children}
        </Context.Provider>
    );
};

export default Provider;
