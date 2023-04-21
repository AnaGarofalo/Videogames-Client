import { useNavigate } from "react-router-dom";
import style from "./Created.module.css";

function Created() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };
  return (
    <div className={style.container}>
      <h1 className={style.text}>Videogame created!</h1>
      <button onClick={handleClick} className={style.button}>
        Home
      </button>
    </div>
  );
}
export default Created;
