import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

const axiosMock = new AxiosMockAdapter(axios);

beforeEach(() => axiosMock.reset());

export { axiosMock };
