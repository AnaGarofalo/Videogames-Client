import { URL_BASE } from "../../utils/vars";
import axios from "axios";

export default async function getGameData(id, setGame, navigate) {
  try {
    const response = await axios.get(`${URL_BASE}/videogames/byId/${id}`);
    const gameData = response.data;

    let platformsString = "";
    gameData.platforms.forEach((platform, index) => {
      platformsString += platform;
      platformsString += index === gameData.platforms.length - 1 ? "" : ", ";
    });
    gameData.platforms = platformsString;

    let genresString = "";
    gameData.genres.forEach((genre, index) => {
      genresString += genre;
      genresString += index === gameData.genres.length - 1 ? "" : ", ";
    });
    gameData.genres = genresString;

    setGame(gameData);
  } catch (error) {
    navigate("/noResults");
  }
}
