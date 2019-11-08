import swApi from '../../services/api/SwApi';
import ListItemFilm from '../../components/list-item-film/ListItemFilm';

export const TYPES = {
    GET_LIST: 'GET_LIST',
    ERROR: 'ERROR'
};

export const filmsStore = {
    title: 'Filmes',
    list: [{
        id: 0,
        name: 'Não há filmes',
        description: 'Aguarde carregando..'
    }],
    listTemplate: ListItemFilm
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
    const request = await swApi.get('films');
    const json = await request.data;

    let { results } = json;

    try {

        if (!results || results.length == 0) {
            throw 'request error';
        }

        results = results.map((data) => {
            return {
                id: data.episode_id,
                name: data.title,
                description: data.opening_crawl
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