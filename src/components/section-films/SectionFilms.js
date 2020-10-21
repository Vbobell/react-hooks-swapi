import React, { useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'urql';

import { useFilmsContext, TYPES } from '../../provider/films';

import TitleMain from '../title-main';
import ListItemFilm from '../list-item-film';

export const FILM_QUERY = gql`
  query {
    films {
      episode_id
      title
      opening_crawl
    }
  }
`;

function SectionFilms() {
  const [state, dispatch] = useFilmsContext();
  const { list, title } = state;
  const [{ data, fetching }] = useQuery({
    query: FILM_QUERY,
  });

  useEffect(() => {
    if (!fetching && data?.films) {
      const results = data?.films?.map((data) => {
        return {
          id: data.episode_id,
          name: data.title,
          description: data.opening_crawl,
        };
      });

      return dispatch({
        type: TYPES.GET_LIST,
        list: results,
      });
    }
  }, [fetching, dispatch, data]);

  return (
    <section className="container container-section" data-testid="section-films">
      <TitleMain>{title}</TitleMain>
      <ul data-testid="list" className="content-list">
        {list?.map((item) => (
          <ListItemFilm {...item} key={item.id} />
        ))}
      </ul>
    </section>
  );
}

export default SectionFilms;
