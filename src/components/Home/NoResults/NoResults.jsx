import { useDispatch } from "react-redux";
import style from "./NoResults.module.css";
import {
  clearAllGames,
  getAllGames,
  setGenreSelector,
  setOrder,
  setOriginSelector,
} from "../../../redux/actions";
import { useNavigate } from "react-router-dom";

function NoResults() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(clearAllGames());
    dispatch(setOrder("none"));
    dispatch(setGenreSelector("all"));
    dispatch(setOriginSelector("all"));
    dispatch(getAllGames());
    navigate("/home");
  };
  return (
    <div className={style.supraContainer}>
      <div className={style.container}>
        <h1 className={style.text}>No games were found</h1>
        <button onClick={handleClick} className={style.button}>
          Start Again
        </button>
      </div>
    </div>
  );
}
export default NoResults;
