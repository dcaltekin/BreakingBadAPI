import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const page_limit = 10;

export const axiosCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (page) => {
    const res = await axios(
      `https://www.breakingbadapi.com/api/characters?limit=${page_limit}&offset=${
        page * page_limit
      }`
    );
    return res.data;
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
    isLoading: false,
    page: 0,
    lastPage: true,
  },
  reducers: {},
  extraReducers: {
    [axiosCharacters.pending]: (state, action) => {
      state.isLoading = true;
    },
    [axiosCharacters.fulfilled]: (state, action) => {
      state.items = [...state.items, ...action.payload];
      state.isLoading = false;
      state.page += 1;
      if (action.payload.length < 10) {
        state.lastPage = false;
      }
    },
  },
});

export default charactersSlice.reducer;
