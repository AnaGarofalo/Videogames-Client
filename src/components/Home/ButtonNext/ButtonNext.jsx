import style from "./ButtonNext.module.css";
import next from "../../../utils/next.png";
import { useDispatch, useSelector } from "react-redux";
import { setPageNumber } from "../../../redux/actions";

function ButtonNext({ pages }) {
  const pageNumber = useSelector((state) => state.pageNumber);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(setPageNumber(pageNumber + 1))}
      className={
        pageNumber === pages.length ? style.hiddenButton : style.button
      }
    >
      <img src={next} className={style.image} alt="Next" />
    </button>
  );
}
export default ButtonNext;
