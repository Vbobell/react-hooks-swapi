import { createContext } from 'react';
import { filmsStore } from '../films/Films';

export const initialState = {
    state: {
        listState: filmsStore
    },
    dispatch: () => {}
};

const Context = createContext(initialState);

export default Context;