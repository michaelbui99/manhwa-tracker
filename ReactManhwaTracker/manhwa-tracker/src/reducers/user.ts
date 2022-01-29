import { createSlice } from "@reduxjs/toolkit";

const initialUserState = { email: "", isLoggedIn: false };

export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialUserState },
    reducers: {
        login: (state, action) => {
            const token = sessionStorage.getItem("token");
            if (token) {
                state.value = action.payload;
            }
        },

        logout: (state) => {
            if (state.value.isLoggedIn) {
                sessionStorage.removeItem("token");
                state.value = initialUserState;
            }
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
