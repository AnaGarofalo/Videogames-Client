import React from "react";

class InputReleased extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleChange, formValues, errors, style } = this.props;
    return (
      <div className={style.inputContainer}>
        <label htmlFor="released" className={style.label}>
          Release date:
        </label>
        <input
          type="date"
          name="released"
          onChange={handleChange}
          value={formValues.released}
          className={errors.released ? style.released : style.largeReleased}
        />
        <p className={style.error}>{errors.released}</p>
      </div>
    );
  }
}

export default InputReleased;
