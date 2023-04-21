import { useDispatch, useSelector } from "react-redux";
import back from "../../../utils/back.png";
import style from "./ButtonPrev.module.css";
import { setPageNumber } from "../../../redux/actions";

const ButtonPrev = () => {
  const pageNumber = useSelector((state) => state.pageNumber);
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => dispatch(setPageNumber(pageNumber - 1))}
        className={pageNumber === 1 ? style.hiddenButton : style.button}
      >
        <img src={back} className={style.image} alt="Prev" />
      </button>
    </>
  );
};

export default ButtonPrev;
