import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Card from "../Card/Card";
import getPageGames from "./getPageGames";
import style from "./Cards.module.css";
import Loading from "../Loading/Loading";

const Cards = ({ pageGames, setPageGames, gamesPerPage }) => {
  const allGames = useSelector((state) => state.games);
  const pageNumber = useSelector((state) => state.pageNumber);

  useEffect(() => {
    setPageGames(getPageGames(pageNumber, allGames, gamesPerPage));
  }, [allGames, pageNumber]);

  return (
    <div className={style.container}>
      {pageGames.length ? (
        pageGames.map((game) => (
          <Card
            name={game.name}
            id={game.id}
            genres={game.genres}
            image={game.background_image}
            key={game.id}
            origin={game.origin}
          />
        ))
      ) : (
        <Loading />
      )}
      ;
    </div>
  );
};

export default Cards;
