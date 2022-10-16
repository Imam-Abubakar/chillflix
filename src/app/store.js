import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/TMDB";
import genreOrCategoryReducer from '../store/currentGenreOrCategory';
import userReducer from '../store/auth'

export default configureStore({
   reducer: {
      [tmdbApi.reducerPath]: tmdbApi.reducer,
      currentGenreOrCategory: genreOrCategoryReducer,
      user: userReducer,
   }
});