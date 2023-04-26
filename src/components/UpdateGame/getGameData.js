import { URL_BASE } from "../../utils/vars";
import axios from "axios";

export default async function getGameData(id, navigate, setFormValues) {
  try {
    const response = await axios.get(`${URL_BASE}/videogames/byId/${id}`);
    const gameData = response.data;

    let platformsString = "";
    gameData.platforms.forEach((platform, index) => {
      platformsString += platform;
      platformsString += index === gameData.platforms.length - 1 ? "" : ", ";
    });
    const platforms = platformsString;

    const genre1 = gameData.genres[0] ? gameData.genres[0] : "None";
    const genre2 = gameData.genres[1] ? gameData.genres[1] : "None";
    const genre3 = gameData.genres[2] ? gameData.genres[2] : "None";

    const image = gameData.background_image;

    const newGame = {
      name: gameData.name,
      image,
      platforms,
      rating: gameData.rating,
      description: gameData.description,
      released: gameData.released,
      genre1,
      genre2,
      genre3,
    };
    setFormValues(newGame);
    return newGame;
  } catch (error) {
    navigate("/noResults");
  }
}
