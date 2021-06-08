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
  //runs a loop to Get all locations into redux store, would probably handle with real pagination if I had more time
  async () => {
    let resArray = [];
    return await getLocation().then(async r => {
          for (let i=1; i <= r.info.pages; i++){
              await getLocation({page:i}).then(r=>
                 {return resArray.push(...r.results)}
              )
          }
          return {info:r.info, results:resArray}
    });
  }
);
export const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {},
  extraReducers: {
    //I usually have a "loading" and "error" on reducers so we can add alerts or loading spinners
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

//selector for results
export const selectLocationResults = (state) => state.locations.results;

export default locationsSlice.reducer;
