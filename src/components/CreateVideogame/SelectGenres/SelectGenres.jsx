const SelectGenres = ({ handleChange, formValues, errors, genres, style }) => {
  return (
    <div className={style.inputContainer}>
      <label htmlFor="genres" className={style.label}>
        Genres:
      </label>
      <select
        name="genre1"
        onChange={handleChange}
        value={formValues.genre1}
        className={style.selector}
      >
        <option name="None" value="None">
          None
        </option>
        {genres.map((genre, index) => {
          return (
            <option name={genre.name} key={index}>
              {genre.name}
            </option>
          );
        })}
      </select>

      <select
        name="genre2"
        onChange={handleChange}
        value={formValues.genre2}
        className={style.selector}
      >
        <option name="None" value="None">
          None
        </option>
        {genres.map((genre, index) => {
          return (
            <option name={genre.name} key={index}>
              {genre.name}
            </option>
          );
        })}
      </select>

      <select
        name="genre3"
        onChange={handleChange}
        value={formValues.genre3}
        className={errors.genres ? style.selector : style.largeSelector}
      >
        <option name="None" value="None">
          None
        </option>
        {genres.map((genre, index) => {
          return (
            <option name={genre.name} key={index}>
              {genre.name}
            </option>
          );
        })}
      </select>
      <p className={style.error}>{errors.genres}</p>
    </div>
  );
};

export default SelectGenres;
