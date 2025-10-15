import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IInitialStateProducts, IProducts } from "../interfaces/Interfaces";
import axios from "axios"

export const getProducts = createAsyncThunk<IProducts[]>("products/getProducts", async(data, thunkApi)=> {
  try {
    const response = await axios.get<IProducts[]>("https://fakestoreapi.com/products")
    return response.data
  } catch (error: any) {
      return thunkApi.rejectWithValue(error.message)
  }
})

const initialState: IInitialStateProducts = {
    data: null,
    error: null,
    loading: false
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    },
    extraReducers: (builder)=> {
      builder
      .addCase(getProducts.pending, (state)=> {
        state.loading = true
      })
      .addCase(getProducts.fulfilled, (state, action: PayloadAction<IProducts[]>)=> {
        state.loading = false
        state.data = action.payload
      })
      .addCase(getProducts.rejected, (state, action: PayloadAction<any>)=> {
        state.loading = false
        state.error = action.payload
      })
    }
})

export default productsSlice.reducer

//feature para admin