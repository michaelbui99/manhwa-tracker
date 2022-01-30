import { createSlice } from "@reduxjs/toolkit";
import { ManhwaList } from "../models/manhwa-list/manhwa-list";

const initialState: ManhwaList[] = [];

const manhwaListSlice = createSlice({
    name: "manhwaLists",
    initialState: { value: initialState },
    reducers: {
        addList: (state, action) => {
            state.value.push(action.payload);
        },
        removeList: (state, action) => {
            state.value = state.value.filter(
                (list) => list.id !== action.payload.id
            );
        },
        setLists: (state, action) => {
            state.value = action.payload;
        },
        clearLists: (state) => {
            state.value = initialState;
        },
    },
});

export const { setLists, clearLists, addList, removeList } =
    manhwaListSlice.actions;

export default manhwaListSlice.reducer;
