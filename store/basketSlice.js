import { createSlice } from "@reduxjs/toolkit";

let product;

export const basketSlice = createSlice({
    name: "basket",
    initialState: { selectedItems: product },
    reducers: {
        addToBasket: (state, action) => {
            state.selectedItems = (action.payload);
        },
        addSelectedItemToStorage: (state, action) => {
            state.selectedItems = action.payload
        }
    }
})


export const { addToBasket, addSelectedItemToStorage } = basketSlice.actions;
export default basketSlice.reducer;