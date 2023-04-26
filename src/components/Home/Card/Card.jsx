import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";
import DeleteButton from "../../Detail/DeleteButton/DeleteButton";
import UpdateButton from "../../Detail/UpdateButton/UpdateButton";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.container}>
        <img src={this.props.image} className={style.image} />

        <div className={style.nameContainer}>
          {this.props.origin === "database" ? (
            <UpdateButton id={this.props.id} />
          ) : (
            ""
          )}

          <h4 className={style.name}>
            <Link className={style.link} to={`/detail/${this.props.id}`}>
              {this.props.name}
            </Link>
          </h4>

          {this.props.origin === "database" ? (
            <DeleteButton id={this.props.id} />
          ) : (
            ""
          )}
        </div>

        <div className={style.genreContainer}>
          {this.props.genres.map((genre, index) => (
            <div className={style.genre} key={index}>
              {genre.name}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Card;
