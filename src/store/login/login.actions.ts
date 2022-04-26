import { createAction } from "@reduxjs/toolkit";
import { LoginReducerInterface } from "../../components/Auth/Login/Login.interface";

export const login = createAction<LoginReducerInterface>('login');
export const logout=createAction("logout");
