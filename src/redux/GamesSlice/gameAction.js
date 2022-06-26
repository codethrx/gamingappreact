//gettign games URL
import { popularGamesURL, newGamesURL, upcomingGamesURL } from "../../api/api";
//axios
import axios from "axios";
//Actions
const fetchGames = () => async (dispatch) => {
  const popularGames = await axios.get(popularGamesURL());
  const newGames = await axios.get(newGamesURL());
  const upcomingGames = await axios.get(upcomingGamesURL());
  console.log(popularGames.data.results);
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popularGames: popularGames.data.results,
      newGames: newGames.data.results,
      upcomingGames: upcomingGames.data.results,
    },
  });
};
export { fetchGames };
