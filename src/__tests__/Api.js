import { TYPES, getList } from '../store/films/Films'; 

const dispatch = (data) => {
    return data;
};

describe('SwApi', () => {
    it('GET_LIST', async () => {
        let result = await getList(dispatch);

        expect(result.type == TYPES.GET_LIST);
    });
});