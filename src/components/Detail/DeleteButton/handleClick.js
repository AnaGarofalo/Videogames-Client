import axios from "axios";
import { URL_BASE } from "../../../utils/vars";
import { getAllGames } from "../../../redux/actions";

async function handleClick(id, navigate, dispatch) {
  try {
    const deleted = await axios.delete(
      `${URL_BASE}/videogames/delete/${id.id}`
    );
    console.log(deleted.data);
    if (deleted.data.deleted) {
      dispatch(getAllGames());
      navigate("/deleted");
    } else window.alert("Failed to delete");
  } catch (error) {
    window.alert("Failed to delete");
  }
}
export default handleClick;
