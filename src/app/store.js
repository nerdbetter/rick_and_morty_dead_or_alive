import { configureStore } from '@reduxjs/toolkit';
import locationsReducer from '../components/locations/locationsSlice'
import charactersReducer from "../components/characters/charactersSlice"


export const store = configureStore({
  reducer: {
    locations: locationsReducer,
    characters: charactersReducer
  },
});
