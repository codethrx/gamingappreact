import gameReducer from "../GamesSlice/gameReducer";
import gameDetailsReducer from "../GemeDetailSlice/gameDetailsReducer";
import searchGameReducer from "../SearchGame/searchGameReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  games: gameReducer,
  gameDetail: gameDetailsReducer,
  searchedGame: searchGameReducer,
});
export default rootReducer;
