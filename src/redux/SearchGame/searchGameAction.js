import axios from "axios";
import { searchGameURL } from "../../api/api";
export const searchGameAction = (slug) => async (dispatch) => {
  const searchedGame = await axios.get(searchGameURL(slug));
  console.log(searchedGame);
  dispatch({
    type: "SEARCH_GAME",
    payload: {
      searchGame: searchedGame.data.results,
    },
  });
};
export const clearSearchGameAction = () => {
  return {
    type: "CLEAR_SEARCH_GAME",
  };
};
