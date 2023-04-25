import { clearAllGames, getGamesByName } from "../../../redux/actions";
import { setPageNumber } from "../../../redux/actions";

//*limpia el estado de juegos, despacha la acción que trae juegos según nombre
const handleClick = (dispatch, name, setName, navigate) => {
  dispatch(clearAllGames());
  dispatch(getGamesByName(name));
  setName("");
  navigate("/searchResults");
  dispatch(setPageNumber(1));
};

export default handleClick;
