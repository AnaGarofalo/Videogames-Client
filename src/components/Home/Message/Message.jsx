import { useDispatch } from "react-redux";
import style from "./Message.module.css";
import {
  clearAllGames,
  getAllGames,
  setGenreSelector,
  setOrder,
  setOriginSelector,
} from "../../../redux/actions";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Message() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch(clearAllGames());
    dispatch(setOrder("none"));
    dispatch(setGenreSelector("all"));
    dispatch(setOriginSelector("all"));
    dispatch(getAllGames());
  }, []);
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <div className={style.supraContainer}>
      <div className={style.container}>
        {location.pathname === "/noResults" ? (
          <h1 className={style.text}>No games were found</h1>
        ) : (
          ""
        )}

        {location.pathname === "/created" ? (
          <h1 className={style.text}>Game created!</h1>
        ) : (
          ""
        )}

        {location.pathname === "/updated" ? (
          <h1 className={style.text}>Videogame updated!</h1>
        ) : (
          ""
        )}

        {location.pathname === "/deleted" ? (
          <h1 className={style.text}>Game deleted</h1>
        ) : (
          ""
        )}

        <button onClick={handleClick} className={style.button}>
          Start Again
        </button>
      </div>
    </div>
  );
}
export default Message;
