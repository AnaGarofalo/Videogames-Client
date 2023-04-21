import React from "react";

class InputRating extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleChange, formValues, errors, style } = this.props;
    return (
      <div className={style.inputContainer}>
        <label htmlFor="rating" className={style.label}>
          Rating:
        </label>
        <input
          name="rating"
          type="text"
          onChange={handleChange}
          value={formValues.rating}
          className={errors.rating ? style.input : style.largeInput}
        />
        <p className={style.error}>{errors.rating}</p>
      </div>
    );
  }
}

export default InputRating;
