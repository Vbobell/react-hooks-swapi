const BASE_URL = 'https://swapi.co/api';

export const TYPES = {
    GET_LIST: 'GET_LIST'
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
            ...state
        };
    default:
        return state;
    }
};

export async function getList() {
    const res = await fetch(`${BASE_URL}/films`);

    res.json()
        .then(res => console.log(res))
        .catch(err => setErrors(err));

    return {
        type: TYPES.GET_LIST
    };
}

export default filmsReducer;