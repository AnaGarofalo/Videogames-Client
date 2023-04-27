import notFound from "../../utils/404.png";
import style from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={style.container}>
      <img data-testid="notFound" src={notFound} className={style.notFound} />
    </div>
  );
}
export default NotFound;
