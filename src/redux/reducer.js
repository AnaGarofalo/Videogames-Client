import {
  CLEAR_ALL_GAMES,
  FILTER_AND_ORDER,
  GET_ALL_GAMES,
  GET_GAMES_BY_NAME,
  GET_GENRES,
  ORDER_BY_NAME,
  ORDER_BY_RATING,
  RESET_GAMES,
  SET_GENRE_SELECTOR,
  SET_ORDER,
  SET_ORIGIN_SELECTOR,
  SET_PAGE_NUMBER,
} from "./actions";

const initialState = {
  backupGames: [],
  games: [],
  genres: [],
  originSelector: "all",
  genreSelector: "all",
  order: "none",
  pageNumber: 1,
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_GAMES:
      return { ...state, games: payload, backupGames: payload };

    case RESET_GAMES:
      return { ...state, games: payload };

    case FILTER_AND_ORDER:
      return { ...state, games: payload };

    case GET_GAMES_BY_NAME:
      return { ...state, games: payload };

    case ORDER_BY_RATING:
      return { ...state, games: payload };

    case ORDER_BY_NAME:
      return { ...state, games: payload };

    case GET_GENRES:
      return { ...state, genres: payload };

    case SET_ORIGIN_SELECTOR:
      return { ...state, originSelector: payload };

    case SET_GENRE_SELECTOR:
      return { ...state, genreSelector: payload };

    case SET_ORDER:
      return { ...state, order: payload };

    case SET_PAGE_NUMBER:
      return { ...state, pageNumber: payload };

    case CLEAR_ALL_GAMES:
      console.log("estoy en el reducer");
      return { ...state, games: [] };

    default:
      return { ...state };
  }
};
