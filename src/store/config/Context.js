import { createContext } from 'react';
import { templateStore } from '../template/Template';

export const initialState = {
    store: {
        ...templateStore
    },
    dispatch: () => {}
};

const Context = createContext(initialState);

export default Context;