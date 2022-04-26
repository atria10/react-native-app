import { createReducer } from "@reduxjs/toolkit";
import { LoginReducerInterface } from "../../components/Auth/Login/Login.interface";
import { login,logout } from "./login.actions";

const initialState :LoginReducerInterface={} as LoginReducerInterface;
export const loginReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(login, (state, action) =>
      action.payload.isLogged? state={...action.payload}: {} as LoginReducerInterface
    )
    .addCase(logout,(state)=>state={username:"",isLogged:false})
);