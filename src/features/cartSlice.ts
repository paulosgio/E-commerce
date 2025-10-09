import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ICart } from "../interfaces/Interfaces";

const initialState: ICart[] = JSON.parse(localStorage.getItem("cart") || "[]")

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ICart>)=> {
            const itemIndex = state.findIndex(param => param.id === action.payload.id)
            if (itemIndex >= 0) {
                state[itemIndex].quantity += action.payload.quantity
            } else {
                state.push(action.payload)
            }
            localStorage.setItem("cart", JSON.stringify(state))
        },
        removeFromCart: (state, action: PayloadAction<string>)=> {
            const itemIndex = state.findIndex(param => param.id === action.payload)
            if (state[itemIndex].quantity > 1) {
                state[itemIndex].quantity -= 1
            } else {
                state.splice(itemIndex, 1)
            }
            localStorage.setItem("cart", JSON.stringify(state))
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer