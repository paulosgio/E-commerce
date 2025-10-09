import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice"
import productsSlice from "./features/productsSlice"
import cartSlice from "./features/cartSlice"
import purchased from "./features/purchasedSlice"

const store = configureStore({
    reducer: {
        auth: authSlice,
        products: productsSlice,
        cart: cartSlice,
        purchased: purchased
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store