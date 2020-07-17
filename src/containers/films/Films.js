import React, { Fragment, useContext, useEffect } from "react";
import Context from "../../store/config/Context";
import Header from "../../components/header/Header";
import SectionFilms from "../../components/section-films/SectionFilms";
import SpaceBackground from "../../components/space-background/SpaceBackground";
import { getList } from "../../store/films/Films";
import {
  setCanvasDimensions,
  fillStars,
  renderStar,
} from "../../store/space-background/SpaceBackground";

import "../template.scss";

function Films() {
  const { state, dispatch } = useContext(Context);
  const { spaceBackgroundState } = state;
  const { filmsDispatch, spaceBackgroundDispatch } = dispatch;

  async function initFilms() {
    if (filmsDispatch) {
      await getList(filmsDispatch);
    }

    if (spaceBackgroundState) {
      setTimeout(async () => {
        const { clientWidth, clientHeight } = document.body;
        const paramsFill = {
          numStars: 600,
          diffHeight: spaceBackgroundState.innerHeight,
        };

        await setCanvasDimensions(
          spaceBackgroundState,
          spaceBackgroundDispatch,
          { clientWidth, clientHeight }
        );
        await fillStars(
          spaceBackgroundState,
          spaceBackgroundDispatch,
          paramsFill
        );
        await renderStar(spaceBackgroundState, spaceBackgroundDispatch);
      }, 50);
    }
  }

  useEffect(() => {
    initFilms();
  }, []);

  return (
    <Fragment>
      <Header />
      <SectionFilms />
      <SpaceBackground />
    </Fragment>
  );
}

export default Films;
