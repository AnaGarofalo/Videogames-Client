import { useDispatch, useSelector } from "react-redux";
import { orderByRating, orderByName, setOrder } from "../../../redux/actions";
import style from "./OrderCards.module.css";

const OrderCards = () => {
  const dispatch = useDispatch();
  const originSelector = useSelector((state) => state.originSelector);
  const genreSelector = useSelector((state) => state.genreSelector);

  const handleChange = (event) => {
    const name = event.target.value;
    dispatch(setOrder(name));
    if (name.includes("To"))
      dispatch(orderByName(name, genreSelector, originSelector));
    else dispatch(orderByRating(name, genreSelector, originSelector));
  };

  return (
    <div className={style.selectorContainer}>
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
