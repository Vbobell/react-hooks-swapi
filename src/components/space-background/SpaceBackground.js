import React, { useEffect, useContext } from "react";
import Context from "../../store/config/Context";
import {
  setStar,
  renderStar,
} from "../../store/space-background/SpaceBackground";

import "./SpaceBackground.scss";

function SpaceBackground() {
  const { state, dispatch } = useContext(Context);

  const { spaceBackgroundState } = state;
  const { spaceBackgroundDispatch } = dispatch;

  async function initBackground() {
    const { innerWidth, innerHeight } = window;
    const canvas = document.querySelector("#space-background");

    if (spaceBackgroundDispatch) {
      await setStar(spaceBackgroundState, spaceBackgroundDispatch, {
        canvas,
        innerWidth,
        innerHeight,
      });
      await renderStar(spaceBackgroundState, spaceBackgroundDispatch);
    }
  }

  useEffect(() => {
    initBackground();
  }, []);

  return <canvas data-testid="space-background" id="space-background"></canvas>;
}

export default SpaceBackground;
