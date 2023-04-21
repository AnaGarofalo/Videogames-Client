import { clearAllGames, getGamesByName } from "../../../redux/actions";
import { setPageNumber } from "../../../redux/actions";

const handleClick = (dispatch, name, setName, navigate) => {
  dispatch(clearAllGames());
  dispatch(getGamesByName(name));
  setName("");
  navigate("/searchResults");
  dispatch(setPageNumber(1));
};

export default handleClick;
