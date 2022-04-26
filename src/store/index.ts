import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./login/login.reducer";
import { usersReducer } from "./users/users.reducer";


const rootReducer = combineReducers({
  login: loginReducer,
  users: usersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;