import packman from "../../../utils/Bean Eater-1s-200px.gif";
import style from "./Loading.module.css";
import { useLocation } from "react-router-dom";

const Loading = () => {
  const location = useLocation();
  return (
    <div className={style.container}>
      <img
        src={packman}
        className={
          location.pathname === "/home" ? style.image : style.detailImage
        }
      />
    </div>
  );
};
export default Loading;
