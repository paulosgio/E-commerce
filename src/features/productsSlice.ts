import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProducts } from "../interfaces/Interfaces";

const initialState: IProducts[] = [
    {
    id: "1",
    name: "Notebook Dell Inspiron",
    price: 3500,
    description: "Notebook Dell Inspiron 15, Intel Core i5, 8GB RAM, 256GB SSD.",
    image: "https://example.com/images/notebook-dell.jpg"
  },
  {
    id: "2",
    name: "Smartphone Samsung Galaxy S21",
    price: 2800,
    description: "Smartphone Samsung Galaxy S21, 128GB, Câmera Tripla.",
    image: "https://example.com/images/galaxy-s21.jpg"
  },
  {
    id: "3",
    name: "Fone de Ouvido Bluetooth JBL",
    price: 350,
    description: "Fone de ouvido JBL sem fio, bateria de longa duração.",
    image: "https://example.com/images/jbl-headphone.jpg"
  },
  {
    id: "4",
    name: "Smart TV LG 50'' 4K",
    price: 2500,
    description: "Smart TV LG 50 polegadas, resolução 4K, webOS.",
    image: "https://example.com/images/lg-tv.jpg"
  }
]

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<IProducts>)=> {

        },
        updateProduct: (state, action: PayloadAction<IProducts>) => {

        },
        deleteProduct: (state, action: PayloadAction<string>)=> {

        },
    }
})

export const { addProduct, deleteProduct, updateProduct } = productsSlice.actions
export default productsSlice.reducer

//feature para admin