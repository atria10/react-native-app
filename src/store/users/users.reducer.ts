import { createReducer } from "@reduxjs/toolkit";
import { User } from "../../components/Auth/Signup/Signup.interface";
import { signup } from "./users.actions";

const initialState: User[] = [];
export const usersReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(signup, (state, action) =>
      state.includes(action.payload) ? state : [...state, action.payload]
    )
);