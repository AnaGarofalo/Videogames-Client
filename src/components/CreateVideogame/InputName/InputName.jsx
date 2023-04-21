function InputName({ handleChange, formValues, errors, style }) {
  return (
    <div className={style.inputContainer}>
      <label htmlFor="name" className={style.label}>
        Name:
      </label>
      <input
        name="name"
        type="text"
        onChange={handleChange}
        value={formValues.name}
        className={errors.name ? style.input : style.largeInput}
      />
      <p className={style.error}>{errors.name}</p>
    </div>
  );
}
export default InputName;
