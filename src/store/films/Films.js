import React, { useContext, useReducer, createContext } from "react";
import swApi from "../../services/api/SwApi";

export const TYPES = {
  GET_LIST: "GET_LIST",
  ERROR: "ERROR",
};

export const initialContext = {
  title: "Films",
  list: [
    {
      id: 0,
      name: "Wait..",
      description: "",
    },
  ],
};

export const FilmsStateContext = createContext();
export const FilmsDispatchContext = createContext();

const filmsReducer = (state, action) => {
  switch (action.type) {
    case TYPES.GET_LIST:
      return {
        ...state,
        list: action.list,
      };
    case TYPES.ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export function FilmsProvider({ children, ...props }) {
  const [state, dispatch] = useReducer(filmsReducer, { ...initialContext });

  return (
    <FilmsStateContext.Provider value={state} {...props}>
      <FilmsDispatchContext.Provider value={dispatch}>
        {children}
      </FilmsDispatchContext.Provider>
    </FilmsStateContext.Provider>
  );
}

export function useFilmsState() {
  const context = useContext(FilmsStateContext);

  if (!context) {
    throw new Error(
      "useFilmsState must be used after an FilmsStateContext.Provider"
    );
  }

  return context;
}

export function useFilmsDispatch() {
  const context = useContext(FilmsDispatchContext);

  if (!context) {
    throw new Error(
      "useFilmsDispatch must be used after and FilmsDispatchContext.Provider"
    );
  }

  return context;
}

export function useFilmsContext() {
  return [useFilmsState(), useFilmsDispatch()];
}

export async function getList(dispatch) {
  const request = await swApi.get("films");
  const json = await request.data;

  let { results } = json;

  try {
    if (!results || results.length === 0) {
      throw new Error("request error");
    }

    results = results.map((data) => {
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
  } catch (err) {
    return dispatch({
      type: TYPES.ERROR,
    });
  }
}

export default filmsReducer;
