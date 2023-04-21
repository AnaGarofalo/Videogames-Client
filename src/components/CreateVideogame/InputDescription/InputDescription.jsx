const InputDescription = ({ handleChange, formValues, errors, style }) => {
  return (
    <div className={style.inputContainer}>
      <label htmlFor="description" className={style.label}>
        Description:
      </label>
      <textarea
        name="description"
        type="text"
        onChange={handleChange}
        value={formValues.description}
        className={errors.description ? style.textarea : style.largeTextarea}
      />
      <p className={style.error}>{errors.description}</p>
    </div>
  );
};
export default InputDescription;
