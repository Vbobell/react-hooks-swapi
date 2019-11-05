import React, { useReducer } from 'react';
import Context from './Context';
import Middleware from './Middleware';
import templateReducer, { templateStore } from '../template/Template';

const Provider = props => {
    const [templateState] = useReducer(
        templateReducer,
        templateStore
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
            ...templateState
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
