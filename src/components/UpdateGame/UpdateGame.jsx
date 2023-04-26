import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../redux/actions";
import validate from "./validate";
import handleUpdateGame from "./handleUpdateGame";
import InputName from "../CreateVideogame/InputName/InputName";
import InputImage from "../CreateVideogame/InputImage/InputImage";
import InputPlatforms from "../CreateVideogame/InputPlatforms/InputPlatforms";
import InputRating from "../CreateVideogame/InputRating/InputRating";
import InputDescription from "../CreateVideogame/InputDescription/InputDescription";
import InputReleased from "../CreateVideogame/InputReleased/InputReleased";
import SelectGenres from "../CreateVideogame/SelectGenres/SelectGenres";
import style from "./UpdateGame.module.css";
import { useNavigate, useParams } from "react-router-dom";
import getGameData from "./getGameData";

const UpdateGame = () => {
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  //*estado con los valores del formulario
  const [formValues, setFormValues] = useState({
    name: "",
    image: "",
    platforms: "",
    rating: "",
    description: "",
    released: "",
    genre1: "None",
    genre2: "None",
    genre3: "None",
  });

  //* estado con los errores del formulario
  const [errors, setErrors] = useState({
    name: "",
    image: "",
    platforms: "",
    rating: "",
    description: "",
    released: "",
    genres: "",
    generalErrors: "",
  });

  //*maneja el cambio en cualquiera de los inputs del formulario y los valida
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setFormValues({ ...formValues, [property]: value });
    setErrors(validate({ ...formValues, [property]: value }));
  };

  //* llama a la función que crea el juego
  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateGame(formValues, errors, setErrors, navigate, dispatch, id);
  };

  //* trae los géneros necesarios para los selects y setea el estado de errores
  useEffect(() => {
    dispatch(getGenres());
    const newGame = getGameData(id, navigate, setFormValues);
    // setErrors(validate(newGame));
  }, []);

  return (
    <div className={style.supraContainer}>
      <div className={style.container}>
        <h1 className={style.title}>Create Videogame</h1>
        <form onSubmit={handleSubmit}>
          <div className={style.columns}>
            <div className={style.column}>
              <InputName
                handleChange={handleChange}
                formValues={formValues}
                errors={errors}
                style={style}
              />

              <InputImage
                handleChange={handleChange}
                formValues={formValues}
                errors={errors}
                style={style}
              />

              <InputPlatforms
                handleChange={handleChange}
                formValues={formValues}
                errors={errors}
                style={style}
              />

              <InputRating
                handleChange={handleChange}
                formValues={formValues}
                errors={errors}
                style={style}
              />
            </div>
            <div className={style.column}>
              <InputDescription
                handleChange={handleChange}
                formValues={formValues}
                errors={errors}
                style={style}
              />

              <InputReleased
                handleChange={handleChange}
                formValues={formValues}
                errors={errors}
                style={style}
              />

              <SelectGenres
                handleChange={handleChange}
                formValues={formValues}
                errors={errors}
                genres={genres}
                style={style}
              />
            </div>
          </div>
          <div className={style.buttonContainer}>
            <button type="submit" className={style.button}>
              Update!
            </button>
          </div>
        </form>
        <p className={style.generalErrors}>{errors.generalErrors}</p>
      </div>
    </div>
  );
};
export default UpdateGame;
