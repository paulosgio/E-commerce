import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice"
import productsSlice from "./features/productsSlice"
import cartSlice from "./features/cartSlice"

const store = configureStore({
    reducer: {
        auth: authSlice,
        products: productsSlice,
        cart: cartSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store