import { createContext } from 'react';
import { filmsStore } from '../films/Films';
import { spaceBackgroundStore } from '../space-background/SpaceBackground';

export const initialState = {
    state: {
        listState: filmsStore,
        spaceBackgroundState: spaceBackgroundStore
    },
    dispatch: () => {}
};

const Context = createContext(initialState);

export default Context;