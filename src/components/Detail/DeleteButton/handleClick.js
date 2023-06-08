import axios from "axios";
import { URL_BASE } from "../../../utils/vars";
import { getAllGames } from "../../../redux/actions";

async function handleClick(id, navigate, dispatch) {
  try {
    const deleted = await axios.delete(
      `${URL_BASE}/videogames/delete/${id.id}`
    );
    if (deleted.data.deleted) {
      //* el dispatch lo hace el componente "Messages"
      // dispatch(getAllGames());
      navigate("/deleted");
    } else window.alert("Failed to delete");
  } catch (error) {
    window.alert("Failed to delete");
  }
}
export default handleClick;
