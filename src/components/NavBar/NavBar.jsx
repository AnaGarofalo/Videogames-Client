import style from "./NavBar.module.css";
import NameSearch from "./NameSearch/NameSearch";
import { Link, useLocation, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (event) => {
    navigate(`/${event.target.name}`);
  };

  return (
    <div className={style.container}>
      {location.pathname === "/createVideogame" ? (
        <div>
          <button name={"home"} onClick={handleClick} className={style.button}>
            Go back Home
          </button>
        </div>
      ) : (
        <div>
          <button
            name={"createVideogame"}
            onClick={handleClick}
            className={style.button}
          >
            CreateVideogame
          </button>
        </div>
      )}
      <Link to="/home" className={style.link}>
        <h1 className={style.title}>
          I ❤️ VIDEOGAMES<div className={style.brillo}></div>
        </h1>
      </Link>

      <NameSearch />
    </div>
  );
}
export default NavBar;
