import { createAction } from "@reduxjs/toolkit";
import { User } from "../../components/Auth/Signup/Signup.interface";


export const signup = createAction<User>('users');
