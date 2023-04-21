import React from "react";
import style from "./LandingPage.module.css";
import { Navigate } from "react-router-dom";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggin: false };
  }
  handleClick = () => {
    this.setState({ loggin: true });
  };

  render() {
    return (
      <div className={style.container}>
        <button onClick={this.handleClick} className={style.button}>
          PRESS START TO CONTINUE
        </button>
        {this.state.loggin && <Navigate to="/home" replace={true} />}
      </div>
    );
  }
}

export default LandingPage;
