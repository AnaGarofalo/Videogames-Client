import React from "react";

class InputImage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleChange, formValues, errors, style } = this.props;
    return (
      <div className={style.inputContainer}>
        <label htmlFor="image" className={style.label}>
          Image link:
        </label>
        <input
          name="image"
          type="text"
          onChange={handleChange}
          value={formValues.image}
          className={errors.image ? style.input : style.largeInput}
        />
        <p className={style.error}>{errors.image}</p>
      </div>
    );
  }
}

export default InputImage;
