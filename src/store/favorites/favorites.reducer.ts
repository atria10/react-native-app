import { createReducer } from "@reduxjs/toolkit";
import { Favorite } from "../../models/favorites.interface";
import { addFavorite, removeFavorite } from "./favorites.actions";

const initialState :Favorite[]=[];
export const favoritesReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(addFavorite, (state, action) =>
    state.find(item=>item.username===action.payload.username &&
         item.type===action.payload.type && item.favorite.id===action.payload.favorite.id) ? state : [...state, action.payload]
    )
    .addCase(removeFavorite, (state, action) =>
    (action.payload.type==='character')?
    state.filter(item=>item.type==='episode' && item.username===action.payload.username || item.favorite.id!==action.payload.favoriteId &&
    item.type==='character' && item.username===action.payload.username):
    (action.payload.type==='episode')?
    state.filter(item=>item.type==='character' && item.username===action.payload.username || item.favorite.id!==action.payload.favoriteId &&
    item.type==='episode' && item.username===action.payload.username) : state
    )
);