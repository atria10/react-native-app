import { createReducer } from "@reduxjs/toolkit";
import { Favorite } from "../../models/favorites.interface";
import { addFavorite, removeFavorite } from "./favorites.actions";

const initialState: Favorite[] = [];
export const favoritesReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(addFavorite, (state, { payload }) =>
      state.find(item => item.username === payload.username &&
        item.type === payload.type && item.favorite.id === payload.favorite.id) ? state : [...state, payload]
    )
    .addCase(removeFavorite, (state, { payload }) =>
      (payload.type === 'character') ?
        state.filter(item => item.type === 'episode' && item.username === payload.username || item.favorite.id !== payload.favoriteId &&
          item.type === 'character' && item.username === payload.username) :
        (payload.type === 'episode') ?
          state.filter(item => item.type === 'character' && item.username === payload.username || item.favorite.id !== payload.favoriteId &&
            item.type === 'episode' && item.username === payload.username) : state
    )
);