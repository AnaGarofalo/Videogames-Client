import { useDispatch, useSelector } from "react-redux";
import {
  clearAllGames,
  filter,
  orderByName,
  orderByRating,
  setGenreSelector,
  setOriginSelector,
} from "../../../redux/actions";
import { useEffect } from "react";
import style from "./Selectors.module.css";
import { useLocation } from "react-router-dom";
import { setPageNumber } from "../../../redux/actions";

const Selectors = ({ genres }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const originSelector = useSelector((state) => state.originSelector);
  const genreSelector = useSelector((state) => state.genreSelector);
  const order = useSelector((state) => state.order);

  const handleClick = (event) => {
    const name = event.target.name;
    if (name.includes("genre")) dispatch(setGenreSelector(name.slice(6)));
    else dispatch(setOriginSelector(name.slice(7)));
  };

  useEffect(() => {
    if (location.pathname !== "/searchResults") dispatch(clearAllGames());
    if (order.includes("To"))
      dispatch(orderByName(order, genreSelector, originSelector));
    else dispatch(orderByRating(order, genreSelector, originSelector));
    // dispatch(filter(genreSelector, originSelector));
    dispatch(setPageNumber(1));
  }, [genreSelector, originSelector]);
  return (
    <div className={style.selectorContainer}>
      <hr className={style.separator} />
      <div className={style.genreSelector}>
        <button
          name="genre_all"
          onClick={handleClick}
          className={
            "all" === genreSelector ? style.activeButton : style.button
          }
        >
          All
        </button>

        {genres.length
          ? genres.map((genre, index) => (
              <>
                <hr key={index + 100} className={style.miniSeparator} />
                <button
                  key={index}
                  name={`genre_${genre.name}`}
                  onClick={handleClick}
                  className={
                    genre.name === genreSelector
                      ? style.activeButton
                      : style.button
                  }
                >
                  {genre.name}
                </button>
              </>
            ))
          : ""}
      </div>
      <hr className={style.separator} />
      <div className={style.originSelector}>
        <button
          name="origin_all"
          onClick={handleClick}
          className={
            originSelector === "all"
              ? style.activeOriginButton
              : style.originButton
          }
        >
          All
        </button>

        <button
          name="origin_api"
          onClick={handleClick}
          className={
            originSelector === "api"
              ? style.activeOriginButton
              : style.originButton
          }
        >
          Default Games
        </button>

        <button
          name="origin_database"
          onClick={handleClick}
          className={
            originSelector === "database"
              ? style.activeOriginButton
              : style.originButton
          }
        >
          My Games
        </button>
      </div>
    </div>
  );
};

export default Selectors;
