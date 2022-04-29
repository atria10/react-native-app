import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { favoritesReducer } from "./favorites/favorites.reducer";
import { loginReducer } from "./login/login.reducer";
import { themesReducer } from "./themes/themes.reducer";
import { usersReducer } from "./users/users.reducer";


const rootReducer = combineReducers({
  login: loginReducer,
  users: usersReducer,
  favorites:favoritesReducer,
  themes: themesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;