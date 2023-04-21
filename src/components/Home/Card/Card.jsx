import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Link to={`/detail/${this.props.id}`}>
        <div className={style.container}>
          <img src={this.props.image} className={style.image} />
          <div className={style.nameContainer}>
            <h4 className={style.name}>{this.props.name}</h4>
          </div>

          <div className={style.genreContainer}>
            {this.props.genres.map((genre, index) => (
              <div className={style.genre} key={index}>
                {genre.name}
              </div>
            ))}
          </div>
        </div>
      </Link>
    );
  }
}

export default Card;
