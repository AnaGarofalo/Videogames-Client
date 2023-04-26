import { useLocation, useNavigate } from "react-router-dom";
import style from "./UpdateButton.module.css";
import updateIcon from "../../../utils/update.png";

function UpdateButton(id) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (id) => {
    navigate(`/update/${id.id}`);
  };

  return (
    <div>
      {location.pathname.includes("detail") ? (
        <button
          className={style.button}
          onClick={() => {
            handleClick(id);
          }}
        >
          Update
        </button>
      ) : (
        <button
          className={style.miniButton}
          onClick={() => {
            handleClick(id);
          }}
        >
          <img src={updateIcon} className={style.icon} />
        </button>
      )}
    </div>
  );
}
export default UpdateButton;
