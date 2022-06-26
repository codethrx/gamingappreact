const initialState = {
  popularGames: [],
  newGames: [],
  upcomingGames: [],
};
export default function gameReducer(init = initialState, action) {
  switch (action.type) {
    case "FETCH_GAMES":
      const { popularGames, newGames, upcomingGames } = action.payload;
      return { ...init, popularGames, newGames, upcomingGames };
    default:
      return init;
  }
}
