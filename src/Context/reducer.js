export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "ADD_FAV":
      return { ...state, favs: [...state.favs, action.payload] };
    case "DELETE_FAV":
      const filterFavs = state.favs.filter(
        (fav) => action.payload.id !== fav.id
      );
      return { ...state, favs: filterFavs };
    case "TOGGLE_THEME":
      const updatesTheme = state.theme === "ligth" ? "dark" : "ligth";
      return { ...state, theme: updatesTheme };
    default:
      throw new Error();
  }
};
