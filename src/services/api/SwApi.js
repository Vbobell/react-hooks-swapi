import axios from 'axios';

const BASE_URL = 'https://swapi.co/api';

const swApi = axios.create({
    baseURL: BASE_URL
});

export default swApi;