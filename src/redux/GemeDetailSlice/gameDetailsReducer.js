export default function gameDetailsReducer(
  init = { gameDetails: null, gameScreenshots: null, isLoading: true },
  action
) {
  switch (action.type) {
    case "GET_GAME_DETAILS":
      return {
        ...init,
        isLoading: false,
        gameDetails: action.payload.gameDetails.data,
        gameScreenshots: action.payload.gameScreenshots.data.results,
      };
    case "DELETE_GAME_DETAILS":
      return { ...init, gameDetails: null };
    default:
      return init;
  }
}
