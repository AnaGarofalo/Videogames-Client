import axios from "axios";
import { URL_BASE } from "../../utils/vars";

const handleCreateGame = async (
  {
    name,
    image,
    platforms,
    rating,
    description,
    released,
    genre1,
    genre2,
    genre3,
  },
  errors,
  setErrors,
  navigate
) => {
  //para comprobar si hay errores, ordena el array con valores del objeto errors de manera que
  //queden en último lugar los strings que contienen caracteres
  if (!!Object.values(errors).sort()[6]) {
    setErrors({ ...errors, generalErrors: "Incorrect Data" });
    return;
  }

  platforms = [platforms];

  const firstLetter = name[0];
  name = name.replace(firstLetter, firstLetter.toUpperCase());

  rating = Number(rating);

  const genres = [];
  if (genre1 !== "None") genres.push(genre1);
  if (genre2 !== "None") genres.push(genre2);
  if (genre3 !== "None") genres.push(genre3);

  description = String(description);

  const newGame = {
    name,
    background_image: image,
    platforms,
    rating,
    description,
    released,
    genres,
  };

  //chequear si existe y crearlo
  try {
    const response = await axios.get(`${URL_BASE}/videogames?name=${name}`);
    const oldGames = response.data;
    let alredyExistent = false;
    oldGames.forEach((game) => {
      if (game.name.toLowerCase() === name.toLowerCase()) alredyExistent = true;
    });
    if (alredyExistent)
      setErrors({ ...errors, generalErrors: "Videogame alredy exists" });
    else {
      axios.post(`${URL_BASE}/videogames`, newGame);
      navigate("/created");
    }
  } catch (error) {
    window.alert(error.message);
  }
};

export default handleCreateGame;
