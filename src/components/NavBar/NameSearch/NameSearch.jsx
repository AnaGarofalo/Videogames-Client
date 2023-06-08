import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import handleClick from "./handleClick";
import { useNavigate } from "react-router-dom";
import style from "./NameSearch.module.css";
import loop from "../../../utils/search.png";
import darkloop from "../../../utils/searchdark.png";

const NameSearch = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //*es un mini formulario controlado
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      handleClick(dispatch, name, setName, navigate);
    }
  };

  return (
    <div className={style.container}>
      <input
        className={style.input}
        onKeyDown={handleEnter}
        placeholder="Insert name"
        type="search"
        onChange={handleChange}
        value={name}
      />
      <button
        onClick={() => handleClick(dispatch, name, setName, navigate)}
        className={style.button}
      >
        <img src={darkloop} className={style.darkImage} alt="Search" />
        <img src={loop} className={style.image} alt="Search" />
      </button>
    </div>
  );
};
export default NameSearch;
