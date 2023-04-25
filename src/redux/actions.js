import { URL_BASE } from "../utils/vars";
import axios from "axios";

export const GET_ALL_GAMES = "GET_ALL_GAMES";
export const GET_GAMES_BY_NAME = "GET_GAMES_BY_NAME";
export const FILTER = "FILTER";
export const ORDER_BY_RATING = "ORDER_BY_RATING";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const GET_GENRES = "GET_GENRES";
export const SET_ORIGIN_SELECTOR = "SET_ORIGIN_SELECTOR";
export const SET_GENRE_SELECTOR = "SET_GENRE_SELECTOR";
export const SET_ORDER = "SET_ORDER";
export const SET_PAGE_NUMBER = "SET_PAGE_NUMBER";
export const CLEAR_ALL_GAMES = "CLEAR_ALL_GAMES;";

//* trae todos los juegos
export const getAllGames = () => {
  return async (dispatch) => {
    try {
      const games = await axios.get(`${URL_BASE}/videogames`);
      dispatch({ type: GET_ALL_GAMES, payload: games.data });
    } catch (error) {
      //NIY
      window.alert(error.message);
    }
  };
};

//* trae los juegos según nombre
export const getGamesByName = (name) => {
  return async (dispatch) => {
    try {
      const games = await axios.get(`${URL_BASE}/videogames?name=${name}`);
      dispatch({ type: GET_GAMES_BY_NAME, payload: games.data });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

// lo hago con order todo
// export const filter = (genre, origin) => {
//   return async (dispatch) => {
//     try {
//       const games = await axios.get(
//         `${URL_BASE}/videogames/selectors?genre=${genre}&origin=${origin}`
//       );
//       dispatch({ type: FILTER, payload: games.data });
//     } catch (error) {
//       //NIY
//       window.alert(error.message);
//     }

//   };
// };

//* filtra y ordena los juegos según raiting
export const orderByRating = (selector, genre, origin) => {
  return async function (dispatch) {
    try {
      const gamesData = await axios.get(
        `${URL_BASE}/videogames/selectors?genre=${genre}&origin=${origin}`
      );
      let games = gamesData.data;
      if (!Array.isArray(games)) {
        dispatch({ type: ORDER_BY_NAME, payload: games });
        return;
      }

      if (selector === "ascendant") {
        games = games.sort((game1, game2) => {
          if (game1.rating > game2.rating) return 1;
          if (game1.rating < game2.rating) return -1;
          return 0;
        });
      } else if (selector === "descendant") {
        games = games.sort((game1, game2) => {
          return game2.rating - game1.rating;
        });
      }

      dispatch({ type: ORDER_BY_RATING, payload: games });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

//*filtra y ordena los juegos según nombre
export const orderByName = (selector, genre, origin) => {
  return async function (dispatch) {
    try {
      const gamesData = await axios.get(
        `${URL_BASE}/videogames/selectors?genre=${genre}&origin=${origin}`
      );
      let games = gamesData.data;
      if (!Array.isArray(games)) {
        dispatch({ type: ORDER_BY_NAME, payload: games });
        return;
      }

      if (selector === "aToZ") {
        games = games.sort((game1, game2) => {
          if (game1.name > game2.name) return 1;
          if (game1.name < game2.name) return -1;
          return 0;
        });
      } else if (selector === "zToA") {
        games = games.sort((game1, game2) => {
          if (game1.name < game2.name) return 1;
          if (game1.name > game2.name) return -1;
          return 0;
        });
      }
      dispatch({ type: ORDER_BY_NAME, payload: games });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

//*trae todos los géneros
export const getGenres = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL_BASE}/genres`);
      const allGenres = response.data;
      dispatch({ type: GET_GENRES, payload: allGenres });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

//*setea el estado origin (filtro)
export const setOriginSelector = (origin) => {
  return { type: SET_ORIGIN_SELECTOR, payload: origin };
};

//*setea el estado género (filtro)
export const setGenreSelector = (genre) => {
  return { type: SET_GENRE_SELECTOR, payload: genre };
};

//*setea el estado orden
export const setOrder = (order) => {
  return { type: SET_ORDER, payload: order };
};

//*setea el n° de pagina
export const setPageNumber = (pageNumber) => {
  return { type: SET_PAGE_NUMBER, payload: pageNumber };
};

//* limpia el estado allGames
export const clearAllGames = () => {
  return { type: CLEAR_ALL_GAMES };
};
