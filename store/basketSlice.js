import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
    name: "basket",
    initialState: { selectedItems: [] },
    reducers: {
        addToBasket: (state, action) => {
            state.selectedItems.push(action.payload);
        }
    }
})


export const { addToBasket } = basketSlice.actions;
export default basketSlice.reducer;