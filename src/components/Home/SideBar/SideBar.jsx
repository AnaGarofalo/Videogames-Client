import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Selectors from "../Selectors/Selectors";
import OrderCards from "../OrderCards/OrderCards";
import { getGenres } from "../../../redux/actions";
import style from "./SideBar.module.css";

function SideBar({ setPageNumber }) {
  const allGenres = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  return (
    <div className={style.container}>
      <OrderCards />
      <Selectors genres={allGenres} />
    </div>
  );
}
export default SideBar;
