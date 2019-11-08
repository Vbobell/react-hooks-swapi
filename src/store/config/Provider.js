import React, { useReducer } from 'react';
import Context from './Context';
import Middleware from './Middleware';
import filmsReducer, { filmsStore } from '../films/Films';
import spaceBackgroundReducer, { spaceBackgroundStore } from '../space-background/SpaceBackground';

const Provider = props => {
    const [filmsState, filmsDispatch] = useReducer(
        filmsReducer,
        filmsStore
    );

    const [ spaceBackgroundState, spaceBackgroundDispatch] = useReducer(
        spaceBackgroundReducer,
        spaceBackgroundStore
    );

    const combinedReducers = {
        state: {
            listState: filmsState,
            spaceBackgroundState: spaceBackgroundState
        },
        dispatch: {
            filmsDispatch,
            spaceBackgroundDispatch
        }
    };

    return (
        <Context.Provider value={combinedReducers}>
            {props.children}
        </Context.Provider>
    );
};

export default Provider;
