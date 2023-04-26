import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getGameData from "./getGameData";
import style from "./Detail.module.css";
import detail_name from "../../utils/detail_name.png";
import detail_id from "../../utils/detail_id.png";
import detail_genres from "../../utils/detail_genres.png";
import detail_platforms from "../../utils/detail_platforms.png";
import detail_rating from "../../utils/detail_rating.png";
import detail_released from "../../utils/detail_released.png";
import Loading from "../Home/Loading/Loading";
import UpdateButton from "./UpdateButton/UpdateButton";
import DeleteButton from "./DeleteButton/DeleteButton";

function Detail() {
  const { id } = useParams();
  const [game, setGame] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getGameData(id, setGame, navigate);
  }, []);

  return (
    <div>
      {game.name ? (
        <>
          <div className={style.bigContainer}>
            <div className={style.smallContainer}>
              <div className={style.textContainer}>
                <h1 className={style.text}>
                  <img src={detail_name} className={style.icon} alt="name" />
                  {game.name}
                  <img src={detail_name} className={style.icon} alt="name" />
                </h1>
                <h3 className={style.text}>
                  <img src={detail_id} className={style.icon} alt="id" />
                  ID: {game.id}
                </h3>
                <h4 className={style.text}>
                  Release date: {game.released}{" "}
                  <img
                    src={detail_released}
                    className={style.icon}
                    alt="released"
                  />
                </h4>
                <h4 className={style.text}>
                  <img
                    src={detail_platforms}
                    className={style.icon}
                    alt="platforms"
                  />
                  Patforms:
                </h4>
                <p className={style.text}>{game.platforms}</p>
                <h4 className={style.text}>
                  Rating: {game.rating}
                  <img
                    src={detail_rating}
                    className={style.icon}
                    alt="rating"
                  />
                </h4>
                <h4 className={style.text}>
                  <img
                    src={detail_genres}
                    className={style.icon}
                    alt="genres"
                  />
                  Genres:{" "}
                </h4>
                <p className={style.text}>{game.genres}</p>
              </div>
              <div className={style.buttonsAndImageContainer}>
                {game.origin === "database" ? (
                  <div className={style.buttonContainer}>
                    <UpdateButton id={game.id} />
                    <DeleteButton id={game.id} />
                  </div>
                ) : (
                  ""
                )}
                <div className={style.imgContainer}>
                  <img
                    src={game.background_image}
                    className={style.image}
                    alt="gameImage"
                  />
                </div>
              </div>
            </div>
            <div className={style.descriptionContainer}>
              <h4>Description: </h4>
              <p>{game.description}</p>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Detail;
