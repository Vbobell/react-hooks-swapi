import React, { useContext } from "react";
import Context from "../../store/config/Context";
import TitleMain from "../title-main/TitleMain";
import ListItemFilm from "../list-item-film/ListItemFilm";

function SectionFilms() {
  const { state } = useContext(Context);
  const { listState } = state;

  return (
    <section
      className="container container-section"
      data-testid="section-films"
    >
      <TitleMain />
      <ul data-testid="list" className="content-list">
        {listState.list.map((item) => (
          <ListItemFilm {...item} key={item.id} />
        ))}
      </ul>
    </section>
  );
}

export default SectionFilms;
