import { useNavigate } from "react-router-dom";
import style from "./DeleteButton.module.css";
import handleClick from "./handleClick";
import { useDispatch } from "react-redux";

function DeleteButton(id) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className={style.button}
        onClick={() => {
          handleClick(id, navigate, dispatch);
        }}
      >
        Delete
      </button>
    </div>
  );
}
export default DeleteButton;
