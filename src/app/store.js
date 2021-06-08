import { configureStore } from '@reduxjs/toolkit';
import locationsReducer from '../components/locations/LocationsSlice'


export const store = configureStore({
  reducer: {
    locations: locationsReducer,
  },
});
