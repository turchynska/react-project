import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, getCamperById } from "./operations.js";

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    clearItems: (state) => {
      Object.assign(state, {
        items: [],
        total: 0,
        page: 1,
      });
    },
    setPage: (state) => {
      state.page += 1;
    },
    addToFavorite: (state, { payload }) => {
      state.favoriteItem.push(payload);
    },
    deleteFromFavorite: (state, { payload }) => {
      state.favoriteItem = state.favoriteItem.filter(
        ({ id }) => id !== payload
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(...payload.items);
        state.total = payload.total;
      })
      .addCase(fetchCampers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getCamperById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.camper = payload;
      })
      .addCase(getCamperById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCamperById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { clearItems, setPage, addToFavorite, deleteFromFavorite } = campersSlice.actions;
export default campersSlice.reducer;