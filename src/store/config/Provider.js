import React, { useReducer } from 'react';
import Context from './Context';
import Middleware from './Middleware';
import filmsReducer, { filmsStore } from '../films/Films';

const Provider = props => {
    const [filmsState] = useReducer(
        filmsReducer,
        filmsStore
    );

    const trigglerDispatchs = action => {
        const dispatchs = [];

        for (let i = 0; i < dispatchs.length; i++) {
            dispatchs[i](action);
        }
    };
    
    const middlewareContrutor = action => {
        Middleware(action)(trigglerDispatchs);
    };

    const combinedReducers = {
        store: {
            ...filmsState
        },
        dispatch: middlewareContrutor
    };

    return (
        <Context.Provider value={combinedReducers}>
            {props.children}
        </Context.Provider>
    );
};

export default Provider;
