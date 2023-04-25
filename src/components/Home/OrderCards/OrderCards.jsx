import { useDispatch, useSelector } from "react-redux";
import {
  clearAllGames,
  resetGames,
  setGenreSelector,
  setOrder,
  setOriginSelector,
} from "../../../redux/actions";
import style from "./OrderCards.module.css";
import { useNavigate } from "react-router-dom";

const OrderCards = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const backupGames = useSelector((state) => state.backupGames);

  const handleChange = (event) => {
    const name = event.target.value;
    dispatch(setOrder(name));
  };
  const handleReset = () => {
    dispatch(clearAllGames());
    dispatch(setOrder("none"));
    dispatch(setGenreSelector("all"));
    dispatch(setOriginSelector("all"));
    dispatch(resetGames(backupGames));
    navigate("/home");
  };

  return (
    <div className={style.selectorContainer}>
      <button onClick={handleReset} className={style.button}>
        Reset
      </button>
      <div className={style.selector}>
        <a>Order:</a>
        <select
          name="orderByRating"
          onChange={handleChange}
          className={style.orderSelector}
        >
          <option value="none">None</option>
          <option value="ascendant">by Rating: Ascendant</option>
          <option value="descendant">by Rating: Descendant</option>
          <option value="aToZ">by Name: A to Z</option>
          <option value="zToA">by Name: Z to A</option>
        </select>
      </div>
    </div>
  );
};

export default OrderCards;
