import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../redux/actions";
import validate from "./validate";
import handleCreateGame from "./handleCreateGame";
import InputName from "./InputName/InputName";
import InputImage from "./InputImage/InputImage";
import InputPlatforms from "./InputPlatforms/InputPlatforms";
import InputRating from "./InputRating/InputRating";
import InputDescription from "./InputDescription/InputDescription";
import InputReleased from "./InputReleased/InputReleased";
import SelectGenres from "./SelectGenres/SelectGenres";
import style from "./CreateVideogame.module.css";
import { useNavigate } from "react-router-dom";

const CreateVideogame = () => {
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setFormValues({ ...formValues, [property]: value });
    setErrors(validate({ ...formValues, [property]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreateGame(formValues, errors, setErrors, navigate);
  };

  useEffect(() => {
    dispatch(getGenres());
    setErrors(validate(formValues));
  }, []);

  return (
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
            Create!
          </button>
        </div>
      </form>
      <p className={style.generalErrors}>{errors.generalErrors}</p>
    </div>
  );
};
export default CreateVideogame;
