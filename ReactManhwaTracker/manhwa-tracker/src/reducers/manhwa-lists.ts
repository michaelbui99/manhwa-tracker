import { createSlice } from "@reduxjs/toolkit";
import { identity } from "lodash";
import { listenerCount } from "process";
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
        addListEntry: (state, action) => {
            const { id, listEntry } = action.payload;
            const list = state.value.find((list) => list.id === id);
            list?.listEntries.push(listEntry);
        },
    },
});

export const { setLists, clearLists, addList, removeList } =
    manhwaListSlice.actions;

export default manhwaListSlice.reducer;
