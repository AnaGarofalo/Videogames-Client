import { URL_BASE } from "../../utils/vars";
import axios from "axios";

export default async function getGameData(id, navigate, setFormValues) {
  try {
    //* trae la info del juego
    const response = await axios.get(`${URL_BASE}/videogames/byId/${id}`);
    const gameData = response.data;

    //* convierte platforms a un string
    let platformsString = "";
    gameData.platforms.forEach((platform, index) => {
      platformsString += platform;
      platformsString += index === gameData.platforms.length - 1 ? "" : ", ";
    });
    const platforms = platformsString;

    //* setea los estados de los géneros a partir del array genres en gameData
    const genre1 = gameData.genres[0] ? gameData.genres[0] : "None";
    const genre2 = gameData.genres[1] ? gameData.genres[1] : "None";
    const genre3 = gameData.genres[2] ? gameData.genres[2] : "None";

    //* cambia el nombre de la imagen
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
    //* setea el formulario con la info del juego para que el usuario pueda cambiar sólo lo que quiera
    setFormValues(newGame);

    //* lo retorna para poder usarlo para la validación
    return newGame;
  } catch (error) {
    //* si falla la request es porque el juego no existe, aunque no se debería poder
    navigate("/noResults");
  }
}
