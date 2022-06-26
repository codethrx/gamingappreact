const initialState = {
  searched: null,
};
export default function searchGameReducer(init = initialState, action) {
  switch (action.type) {
    case "SEARCH_GAME":
      return { ...init, searched: action.payload.searchGame };
    case "CLEAR_SEARCH_GAME":
      return { ...init, searched: null };
    default:
      return init;
  }
}
