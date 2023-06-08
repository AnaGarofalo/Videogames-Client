import { useEffect, useState } from "react";
import Cards from "./Cards/Cards";
import PagesNavBar from "./PagesNavBar/PagesNavBar";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./SideBar/SideBar";
import style from "./Home.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonNext from "./ButtonNext/ButtonNext";
import ButtonPrev from "./ButtonPrev/ButtonPrev";
import { getAllGames, resetGames } from "../../redux/actions";

function Home() {
  const allGames = useSelector((state) => state.games);
  const [pageGames, setPageGames] = useState([]);
  const [pages, setPages] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gamesPerPage = 6;

  useEffect(() => {
    if (
      //* si llega al home y no hay juegos (pero sí es un array, es decir que no es que se haya hecho una búsqueda)
      Array.isArray(allGames) &&
      !allGames.length &&
      location.pathname !== "/searchResults"
    )
      dispatch(getAllGames());

    //*al desmontarse deja de renderizar los juegos que se buscaron x nombre y vuelve a los del home
    return () => {
      if (location.pathname === "/searchResults") {
        dispatch(resetGames());
      }
    };
  }, []);

  return (
    <div>
      {/* si allGames no es un array, es porque se hizo una búsqueda que no
      arrojó ningún resultado, de esta forma se diferencia del array vacío
      que es cuando se están esperando los datos de la api */}
      {!Array.isArray(allGames) ? (
        navigate("/noResults")
      ) : (
        <>
          <div className={style.bigContainer}>
            {location.pathname !== "/searchResults" ? <SideBar /> : ""}

            <div>
              <div className={style.cardsAndButtons}>
                <ButtonPrev />

                <Cards
                  pageGames={pageGames}
                  setPageGames={setPageGames}
                  gamesPerPage={gamesPerPage}
                />

                <ButtonNext pages={pages} />
              </div>

              <PagesNavBar
                gamesPerPage={gamesPerPage}
                pages={pages}
                setPages={setPages}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default Home;
