import { createReducer } from "@reduxjs/toolkit";
import { LoginReducerInterface } from "../../components/Auth/Login/Login.interface";
import { login,logout } from "./login.actions";

const initialState :LoginReducerInterface={} as LoginReducerInterface;
export const loginReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(login, (state, {payload}) =>
      payload.isLogged? state={...payload}: {} as LoginReducerInterface
    )
    .addCase(logout,(state)=>state={username:"",isLogged:false})
);