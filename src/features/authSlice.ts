import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IAuth } from "../interfaces/Interfaces";

const initialState: IAuth = {
    isAuthenticated: false,
    token: null,
    isAdmin: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<{ token: string, isAdmin: boolean, username: string }>)=> {
            state.isAuthenticated = true
            state.token = action.payload.token
            state.isAdmin = action.payload.isAdmin
            localStorage.setItem("isAdmin", JSON.stringify(state.isAdmin))
            localStorage.setItem("token", state.token)
            localStorage.setItem("name", action.payload.username)
        },
        loginFailed: (state)=> {
            console.log(state);
        }
    }
})

export const { loginSuccess, loginFailed } = authSlice.actions
export default authSlice.reducer