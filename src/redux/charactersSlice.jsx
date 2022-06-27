import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosCharacters = createAsyncThunk(
  "characters/getCharacters",
  async () => {
    const res = await axios(
      "https://www.breakingbadapi.com/api/characters?limit=60"
    );
    return res.data;
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [axiosCharacters.pending]: (state, action) => {
      state.isLoading = true;
    },
    [axiosCharacters.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
  },
});

export default charactersSlice.reducer;
