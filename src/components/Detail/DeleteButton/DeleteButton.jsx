import { useLocation, useNavigate } from "react-router-dom";
import style from "./DeleteButton.module.css";
import handleClick from "./handleClick";
import { useDispatch } from "react-redux";
import deleteIcon from "../../../utils/delete.png";

function DeleteButton(id) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <div className={style.container}>
      {location.pathname.includes("detail") ? (
        <button
          className={style.button}
          onClick={() => {
            handleClick(id, navigate, dispatch);
          }}
        >
          Delete
        </button>
      ) : (
        <button
          className={style.miniButton}
          onClick={() => {
            handleClick(id, navigate, dispatch);
          }}
        >
          <img src={deleteIcon} className={style.icon} />
        </button>
      )}
    </div>
  );
}
export default DeleteButton;
