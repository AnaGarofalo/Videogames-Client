const validate = ({
  name,
  image,
  platforms,
  rating,
  description,
  released,
  genre1,
  genre2,
  genre3,
}) => {
  const errors = {
    name: "",
    image: "",
    platforms: "",
    rating: "",
    description: "",
    released: "",
    genres: "",
  };

  //* primero chequea si los campos están vacíos
  errors.name = name.length ? "" : "Enter name";
  errors.image = image.length ? "" : "Enter image";
  errors.platforms = platforms.length ? "" : "Enter platforms";
  errors.description = description.length ? "" : "Enter description";
  errors.description =
    description.length > 255 ? "Description too long" : errors.description;

  errors.released = released ? "" : "Enter full date";

  let emptyGenres = 0;
  if (genre1 === "None") emptyGenres++;
  if (genre2 === "None") emptyGenres++;
  if (genre3 === "None") emptyGenres++;

  errors.genres =
    emptyGenres > 2 ? "Videogame must have at least one genre" : "";

  //*chequea que no haya géneros repetidos
  if (
    emptyGenres < 2 &&
    (genre1 === genre2 || genre1 === genre3 || genre2 === genre3)
  )
    errors.genres = "Can't choose the same game twice";

  //*chequea que rating sea un número y que sea menor a 5
  errors.rating = rating.length ? "" : "Enter rating";
  rating = Number(rating);
  errors.rating =
    String(rating) === "NaN" ? "Rating must be a number" : errors.rating;

  errors.rating = rating > 5 ? "Rating must be under 5" : errors.rating;

  //checking date
  if (!released) return errors;
  const actualDate = new Date();
  const [actualMonth, actualDay, actualYear] = [
    actualDate.getMonth() + 1,
    actualDate.getDate(),
    actualDate.getFullYear(),
  ];
  const [gameDay, gameMonth, gameYear] = [
    Number(released.slice(8)),
    Number(released.slice(5, 7)),
    Number(released.slice(0, 4)),
  ];
  if (
    gameYear > actualYear ||
    (gameYear >= actualYear && gameMonth > actualMonth) ||
    (gameYear >= actualYear && gameMonth >= actualMonth && gameDay > actualDay)
  )
    errors.released = "Release date must be a past date";

  return errors;
};

export default validate;
