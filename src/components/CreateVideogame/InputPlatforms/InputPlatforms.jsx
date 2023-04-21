function InputPlatforms({ handleChange, formValues, errors, style }) {
  return (
    <div className={style.inputContainer}>
      <label htmlFor="platforms" className={style.label}>
        Platforms list:
      </label>
      <input
        name="platforms"
        type="text"
        onChange={handleChange}
        value={formValues.platforms}
        className={errors.platforms ? style.input : style.largeInput}
      />
      <p className={style.error}>{errors.platforms}</p>
    </div>
  );
}

export default InputPlatforms;
