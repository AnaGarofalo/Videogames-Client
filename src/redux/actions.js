import { URL_BASE } from "../utils/vars";
import axios from "axios";

export const GET_ALL_GAMES = "GET_ALL_GAMES";
export const RESET_GAMES = "RESET_GAMES";
export const FILTER_AND_ORDER = "FILTER_AND_ORDER";
export const GET_GAMES_BY_NAME = "GET_GAMES_BY_NAME";
export const ORDER_BY_RATING = "ORDER_BY_RATING";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const GET_GENRES = "GET_GENRES";
export const SET_ORIGIN_SELECTOR = "SET_ORIGIN_SELECTOR";
export const SET_GENRE_SELECTOR = "SET_GENRE_SELECTOR";
export const SET_ORDER = "SET_ORDER";
export const SET_PAGE_NUMBER = "SET_PAGE_NUMBER";
export const CLEAR_ALL_GAMES = "CLEAR_ALL_GAMES";

//* trae todos los juegos
export const getAllGames = () => {
  return async (dispatch) => {
    try {
      const games = await axios.get(`${URL_BASE}/videogames`);
      dispatch({ type: GET_ALL_GAMES, payload: games.data });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

//* lleva los juegos del backup a los juegos que se renderizan
export const resetGames = (backupGames) => {
  return { type: RESET_GAMES, payload: backupGames };
};

//*hace el filtro y el orden en el front
export const filterAndOrder = (order, genre, origin, backupGames) => {
  const newBackupGames = [...backupGames];
  let orderedGames = [];
  //*ordena según el selector
  switch (order) {
    case "none":
      orderedGames = newBackupGames.sort((game1, game2) => 0);
      break;
    case "ascendant":
      orderedGames = newBackupGames.sort((game1, game2) => {
        if (game1.rating > game2.rating) return 1;
        if (game1.rating < game2.rating) return -1;
        return 0;
      });
      break;
    case "descendant":
      orderedGames = newBackupGames.sort((game1, game2) => {
        return game2.rating - game1.rating;
      });
      break;
    case "aToZ":
      orderedGames = newBackupGames.sort((game1, game2) => {
        if (game1.name > game2.name) return 1;
        if (game1.name < game2.name) return -1;
        return 0;
      });
      break;
    case "zToA":
      orderedGames = newBackupGames.sort((game1, game2) => {
        if (game1.name < game2.name) return 1;
        if (game1.name > game2.name) return -1;
        return 0;
      });
      break;
  }

  let games = [];

  //*filtra por género
  orderedGames.forEach((game) => {
    game.genres.forEach((gameGenre) => {
      if (gameGenre.name === genre) games.push(game);
    });
    if (genre === "all") games.push(game);
  });

  //*chequea que queden juegos
  if (!games.length) {
    return { type: FILTER_AND_ORDER, payload: { message: "No results" } };
  }

  //*filtra por origen
  if (origin !== "all") {
    games = games.filter((game) => game.origin === origin);
  }

  //*chequea que queden juegos
  if (!games.length)
    return { type: FILTER_AND_ORDER, payload: { message: "No results" } };

  return { type: FILTER_AND_ORDER, payload: games };
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

// //* filtra y ordena los juegos según raiting en el back
// export const orderByRating = (selector, genre, origin) => {
//   return async function (dispatch) {
//     try {
//       const gamesData = await axios.get(
//         `${URL_BASE}/videogames/selectors?genre=${genre}&origin=${origin}`
//       );
//       let games = gamesData.data;
//       if (!Array.isArray(games)) {
//         dispatch({ type: ORDER_BY_NAME, payload: games });
//         return;
//       }

//       if (selector === "ascendant") {
//         games = games.sort((game1, game2) => {
//           if (game1.rating > game2.rating) return 1;
//           if (game1.rating < game2.rating) return -1;
//           return 0;
//         });
//       } else if (selector === "descendant") {
//         games = games.sort((game1, game2) => {
//           return game2.rating - game1.rating;
//         });
//       }

//       dispatch({ type: ORDER_BY_RATING, payload: games });
//     } catch (error) {
//       window.alert(error.message);
//     }
//   };
// };

// //*filtra y ordena los juegos según nombre en el back
// export const orderByName = (selector, genre, origin) => {
//   return async function (dispatch) {
//     try {
//       const gamesData = await axios.get(
//         `${URL_BASE}/videogames/selectors?genre=${genre}&origin=${origin}`
//       );
//       let games = gamesData.data;
//       if (!Array.isArray(games)) {
//         dispatch({ type: ORDER_BY_NAME, payload: games });
//         return;
//       }

//       if (selector === "aToZ") {
//         games = games.sort((game1, game2) => {
//           if (game1.name > game2.name) return 1;
//           if (game1.name < game2.name) return -1;
//           return 0;
//         });
//       } else if (selector === "zToA") {
//         games = games.sort((game1, game2) => {
//           if (game1.name < game2.name) return 1;
//           if (game1.name > game2.name) return -1;
//           return 0;
//         });
//       }
//       dispatch({ type: ORDER_BY_NAME, payload: games });
//     } catch (error) {
//       window.alert(error.message);
//     }
//   };
// };
