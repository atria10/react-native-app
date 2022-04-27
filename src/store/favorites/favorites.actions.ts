import { createAction } from "@reduxjs/toolkit";
import { Favorite, RemoveFavorite } from "../../models/favorites.interface";


export const addFavorite = createAction<Favorite>('addFavorite');
export const removeFavorite=createAction<RemoveFavorite>('removeFavorite');
