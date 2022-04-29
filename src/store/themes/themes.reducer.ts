import { createReducer } from "@reduxjs/toolkit";
import { changeTheme } from "./themes.actions";

const initialState: boolean = false;
export const themesReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(changeTheme, (_, action) =>
      action.payload
    )
);