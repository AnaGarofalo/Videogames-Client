import React from "react";
import linkedin from "../../utils/linkedin.png";
import github from "../../utils/github.png";
import style from "./Footer.module.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.container}>
        <a href="https://www.linkedin.com/in/ana-mar%C3%ADa-gar%C3%B3falo-a20bab238/">
          <img src={linkedin} className={style.image} data-testid="linkedin" />
        </a>
        <h6 className={style.text} data-testid="createdBy">
          created-by: Ana María Garófalo
        </h6>
        <a href="https://github.com/AnaGarofalo">
          <img src={github} className={style.image} data-testid="github" />
        </a>
      </div>
    );
  }
}

export default Footer;
