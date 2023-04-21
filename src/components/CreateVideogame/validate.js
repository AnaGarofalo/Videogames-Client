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
  if (
    emptyGenres < 2 &&
    (genre1 === genre2 || genre1 === genre3 || genre2 === genre3)
  )
    errors.genres = "Can't choose the same game twice";

  errors.rating = rating.length ? "" : "Enter rating";
  rating = Number(rating);
  errors.rating =
    String(rating) === "NaN" ? "Rating must be a number" : errors.rating;

  errors.rating = rating > 5 ? "Rating must be under 5" : errors.rating;

  return errors;
};

export default validate;
