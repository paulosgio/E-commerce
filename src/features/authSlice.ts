import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IAuthInitialState, ILoginForm } from "../interfaces/Interfaces";
import axios from "axios";

const initialState: IAuthInitialState = {
    loading: false,
    data: null,
    error: null
}

export const auth = createAsyncThunk<string, ILoginForm>("auth/auth", async(credentials, thunkApi)=> {
  try {
    const response = await axios.post<{token: string}>("https://fakestoreapi.com/auth/login", credentials)
    return response.data.token
  } catch (error: any) {
      return thunkApi.rejectWithValue(error.message)
  }
})

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<{ token: string, username: string }>) => {
            state.data = {
                token: action.payload.token,
                username: action.payload.username,
            };
        }
    },
    extraReducers: (builder)=> {
          builder
          .addCase(auth.pending, (state)=> {
            state.loading = true
          })
          .addCase(auth.fulfilled, (state, action: PayloadAction<string>)=> {
            state.loading = false
            if (state.data) {
                state.data = {
                     token: action.payload,
                     username: state.data.username
                }
            }
            localStorage.setItem("token", action.payload)
          })
          .addCase(auth.rejected, (state, action: PayloadAction<any>)=> {
            state.loading = false
            state.error = action.payload
          })
        }
})

export const { loginSuccess } = authSlice.actions
export default authSlice.reducer