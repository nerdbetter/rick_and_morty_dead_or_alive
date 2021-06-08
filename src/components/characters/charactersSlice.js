import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCharacter }  from '../../services';

const initialState = {
    results:[],
    status: 'idle',
    error: null
}

export const fetchCharacters = createAsyncThunk(
    'characters/fetchCharacters',
    async (options) => {
      return await getCharacter(options).then(async r => {
         return {r}
      });
    }
  );
export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers:{},
    extraReducers: {
        [fetchCharacters.pending] : (state) =>{
            state.status = 'loading'
        },
        [fetchCharacters.fulfilled]: (state, action) => {
            state.results = action.payload.r.length ? action.payload.r : [action.payload.r];
            state.status = 'complete';
        },
        [fetchCharacters.rejected]: (state, action) => {
            state.status = 'error'
            state.error = action.error
        }
    },
});

export const selectCharactersResults = (state) => state.characters.results;

export default charactersSlice.reducer;