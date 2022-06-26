import { gameDetailURL, gameScreenshoteURL } from "../../api/api";
import axios from "axios";
const loadGameDetails = (id) => async (dispatch) => {
  const gameDetails = await axios.get(gameDetailURL(id));
  const gameScreenshots = await axios.get(gameScreenshoteURL(id));
  dispatch({
    type: "GET_GAME_DETAILS",
    payload: {
      gameDetails,
      gameScreenshots,
    },
  });
  document.body.style.overflowY = "hidden";
};
const deleteGameDetails = () => ({ type: "DELETE_GAME_DETAILS" });
export { loadGameDetails, deleteGameDetails };
