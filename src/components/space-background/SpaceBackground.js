import React, { useEffect, useRef } from "react";
import {
  useSpaceBackgroundContext,
  setCanvasDimensions,
  fillStars,
  renderStar,
} from "../../store/space-background";

import "./SpaceBackground.scss";

function SpaceBackground({ width, height }) {
  const [state, dispatch] = useSpaceBackgroundContext();
  const { stars, numStars, innerWidth, innerHeight } = state;
  const canvasRef = useRef(null);

  useEffect(() => {
    function initCanvas() {
      const canvas = canvasRef.current;

      if (canvas) {
        setCanvasDimensions(dispatch, {
          width,
          height,
          canvas,
        });
      }
    }

    initCanvas();
  }, [width, height, dispatch]);

  useEffect(() => {
    function initStars() {
      const canvas = canvasRef.current;

      if (canvas) {
        fillStars(dispatch, {
          canvas,
          numStars,
          innerWidth,
          innerHeight,
        });
      }
    }

    initStars();
  }, [numStars, innerWidth, innerHeight, dispatch]);

  useEffect(() => {
    function initRenderStars() {
      const canvas = canvasRef.current;

      if (canvas) {
        renderStar(dispatch, {
          canvas,
          stars,
          innerWidth,
          innerHeight,
        });
      }
    }

    initRenderStars();
  }, [stars, innerWidth, innerHeight, dispatch]);

  return (
    <canvas
      ref={canvasRef}
      data-testid="space-background"
      id="space-background"
    ></canvas>
  );
}

export default SpaceBackground;
