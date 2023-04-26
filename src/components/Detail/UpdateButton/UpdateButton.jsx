import { useNavigate } from "react-router-dom";
import style from "./UpdateButton.module.css";

function UpdateButton(id) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/update/${id.id}`);
  };

  return (
    <div>
      <button
        className={style.button}
        onClick={() => {
          handleClick(id);
        }}
      >
        Update
      </button>
    </div>
  );
}
export default UpdateButton;
