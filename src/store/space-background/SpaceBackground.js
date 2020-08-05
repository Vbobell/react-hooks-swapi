import React, { useContext, useReducer, createContext } from "react";
import Star from "../../models/Star";

export const TYPES = {
  FILL_STARS: "FILL_STARS",
  RENDER_STARS: "RENDER_STARS",
  SET_CANVAS_DIMENSIONS: "SET_CANVAS_DIMENSIONS",
  ERROR: "ERROR",
};

export const initialContext = {
  fps: 50,
  numStars: 300,
  innerWidth: null,
  innerHeight: null,
  stars: [],
};

export const SpaceBackgroundStateContext = createContext();
export const SpaceBackgroundDispatchContext = createContext();

const spaceBackgroundReducer = (state, action) => {
  switch (action.type) {
    case TYPES.FILL_STARS:
    case TYPES.SET_CANVAS_DIMENSIONS:
      return {
        ...state,
        ...action.state,
      };
    case TYPES.RENDER_STARS:
      return {
        ...state,
      };
    case TYPES.ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export function SpaceBackgroundProvider({ children, ...props }) {
  const [state, dispatch] = useReducer(spaceBackgroundReducer, {
    ...initialContext,
  });

  return (
    <SpaceBackgroundStateContext.Provider value={state} {...props}>
      <SpaceBackgroundDispatchContext.Provider value={dispatch}>
        {children}
      </SpaceBackgroundDispatchContext.Provider>
    </SpaceBackgroundStateContext.Provider>
  );
}

export function useSpaceBackgroundState() {
  const context = useContext(SpaceBackgroundStateContext);

  if (!context) {
    throw new Error(
      "useSpaceBackgroundState must be used after an SpaceBackgroundStateContext.Provider"
    );
  }

  return context;
}

export function useSpaceBackgroundDispatch() {
  const context = useContext(SpaceBackgroundDispatchContext);

  if (!context) {
    throw new Error(
      "useSpaceBackgroundDispatch must be used after and SpaceBackgroundDispatchContext.Provider"
    );
  }

  return context;
}

export function useSpaceBackgroundContext() {
  return [useSpaceBackgroundState(), useSpaceBackgroundDispatch()];
}

export function setCanvasDimensions(dispatch, { width, height, canvas }) {
  canvas.setAttribute("width", width);
  canvas.setAttribute("height", height);

  return dispatch({
    type: TYPES.SET_CANVAS_DIMENSIONS,
    state: {
      innerWidth: width,
      innerHeight: height,
    },
  });
}

export function fillStars(
  dispatch,
  { innerWidth, innerHeight, canvas, numStars }
) {
  const stars = [];

  for (var i = 0; i < numStars; i++) {
    var x = Math.round(Math.random() * innerWidth);
    var y = Math.round(Math.random() * innerHeight);
    var opacity = Math.random() * 0.5;

    var star = new Star(x, y, opacity, canvas);

    stars.push(star);
  }

  return dispatch({
    type: TYPES.FILL_STARS,
    state: { numStars, stars },
  });
}

export function renderStar(
  dispatch,
  { canvas, stars, innerWidth, innerHeight }
) {
  let ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, innerWidth, innerHeight);

  stars.forEach(function (star) {
    star.draw();
  });

  return dispatch({
    type: TYPES.RENDER_STARS,
    state: { stars },
  });
}

export default spaceBackgroundReducer;
