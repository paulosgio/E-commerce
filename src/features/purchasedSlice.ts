import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ICart } from "../interfaces/Interfaces";

const initialState: ICart[] = JSON.parse(localStorage.getItem("purchased") || "[]")

const purchasedSlice = createSlice({
    name: "purchased",
    initialState,
    reducers: {
        addPurchase: (state, action: PayloadAction<ICart[]>)=> {
            state.push(...action.payload)
            localStorage.setItem("purchased", JSON.stringify(state))
        }
    }
})

export const { addPurchase } = purchasedSlice.actions
export default purchasedSlice.reducer