export const templateStore = {
    title: 'Filmes',
    list: [{
        id: 0,
        name: 'Not itens'
    }]
};
  
export const MOUNT = 'MOUNT';
  
const templateReducer = (state = templateStore, action) => {
    switch (action.type) {
    case MOUNT:
        return {
            ...state,
        };
    default:
        return state;
    }
};

export default templateReducer;