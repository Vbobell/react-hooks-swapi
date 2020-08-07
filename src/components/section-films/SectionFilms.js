import React, { useEffect } from 'react';

import { useFilmsContext, getList } from '../../store/films';

import TitleMain from '../title-main/TitleMain';
import ListItemFilm from '../list-item-film/ListItemFilm';

function SectionFilms() {
  const [state, dispatch] = useFilmsContext();
  const { list, title } = state;

  useEffect(() => {
    async function initFilms() {
      await getList(dispatch);
    }

    initFilms();
  }, [dispatch]);

  return (
    <section className="container container-section" data-testid="section-films">
      <TitleMain>{title}</TitleMain>
      <ul data-testid="list" className="content-list">
        {list.map((item) => (
          <ListItemFilm {...item} key={item.id} />
        ))}
      </ul>
    </section>
  );
}

export default SectionFilms;
