const BASE_URL = 'https://swapi.co/api';

export const TYPES = {
    GET_LIST: 'GET_LIST',
    ERROR: 'ERROR'
};

export const filmsStore = {
    title: 'Filmes',
    list: [{
        id: 0,
        name: 'Not itens'
    }]
};

const filmsReducer = (state = filmsStore, action) => {
    switch (action.type) {
    case TYPES.GET_LIST:
        return {
            ...state,
            list: action.list
        };
    case TYPES.ERROR:
        return {
            ...state
        };
    default:
        return state;
    }
};

export async function getList(dispatch) {
    const request = await fetch(`${BASE_URL}/films`);
    const json = await request.json();
    let { results } = json;

    results = results.map((data) => {
        return {
            id: data.episode_id,
            name: data.title
        };
    });

    return dispatch({
        type: TYPES.GET_LIST,
        list: results
    });
}

export default filmsReducer;