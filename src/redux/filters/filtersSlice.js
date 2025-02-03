import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        changeFilter: (state, { payload }) => {
            state.name = initialState
            state.name = payload;
        },
    },
});
export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;