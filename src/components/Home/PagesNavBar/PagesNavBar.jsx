import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import calculatePages from "./calculatePages";
import style from "./PagesNavBar.module.css";
import { setPageNumber } from "../../../redux/actions";

const PagesNavBar = ({ gamesPerPage, pages, setPages }) => {
  const pageNumber = useSelector((state) => state.pageNumber);
  const allGames = useSelector((state) => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    setPages(calculatePages(gamesPerPage, allGames));
  }, [allGames]);

  const handlePage = (event) => {
    dispatch(setPageNumber(Number(event.target.name)));
  };

  return (
    <div className={style.container}>
      {pages.length
        ? pages.map((page, index) => (
            <button
              key={index + 1}
              onClick={handlePage}
              name={index + 1}
              className={
                page === pageNumber ? style.activePageButton : style.pageButton
              }
            >
              {page}
            </button>
          ))
        : ""}
    </div>
  );
};
export default PagesNavBar;
