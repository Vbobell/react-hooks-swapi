import React, { useReducer } from 'react';
import Context from './Context';
import Middleware from './Middleware';
import filmsReducer, { filmsStore } from '../films/Films';

const Provider = props => {
    const [filmsState, filmsDispatch] = useReducer(
        filmsReducer,
        filmsStore
    );

    const combinedReducers = {
        state: {
            listState: filmsState
        },
        dispatch: {
            filmsDispatch
        }
    };

    return (
        <Context.Provider value={combinedReducers}>
            {props.children}
        </Context.Provider>
    );
};

export default Provider;
