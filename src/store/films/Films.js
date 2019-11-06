import swApi from '../../services/api/SwApi';

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
    const request = await swApi('films');
    const json = await request.data;

    let { results } = json;

    try {

        if (!results || results.length == 0) {
            throw 'request error';
        }

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

    } catch(err) {
        console.error(err);
        
        return dispatch({
            type: TYPES.ERROR
        });
    } 
}

export default filmsReducer;