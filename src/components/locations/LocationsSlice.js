import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLocation } from "../../services";

const initialState = {
  info: {},
  results: [],
  status: "idle",
  error: null,
};

export const fetchLocations = createAsyncThunk(
  "locations/fetchLocation",
  async () => {
    return await getLocation();
  }
);
export const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchLocations.pending]: (state) => {
      state.status = "loading";
    },
    [fetchLocations.fulfilled]: (state, action) => {
      state.info = action.payload.info;
      state.results = action.payload.results;
      state.status = "complete";
    },
    [fetchLocations.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error;
    },
  },
});

export default locationsSlice.reducer;
