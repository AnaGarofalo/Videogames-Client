import { useEffect, useState } from "react";
import Cards from "./Cards/Cards";
import PagesNavBar from "./PagesNavBar/PagesNavBar";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./SideBar/SideBar";
import style from "./Home.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonNext from "./ButtonNext/ButtonNext";
import ButtonPrev from "./ButtonPrev/ButtonPrev";
import { getAllGames } from "../../redux/actions";

function Home() {
  const allGames = useSelector((state) => state.games);
  const [pageGames, setPageGames] = useState([]);
  const [pages, setPages] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gamesPerPage = location.pathname === "/home" ? 6 : 8;

  useEffect(() => {
    if (Array.isArray(allGames) && !allGames.length) dispatch(getAllGames());
  }, []);

  return (
    <div>
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
