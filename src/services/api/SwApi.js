import { createClient } from 'urql';

export const client = createClient({
  url: 'https://vbobel-swapi-graphql.herokuapp.com/graphql',
});
