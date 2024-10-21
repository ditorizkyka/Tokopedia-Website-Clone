import { createSlice } from "@reduxjs/toolkit";
// import { useEffect } from "react";
// import { getProducts } from "../../service/product.service";

const ProductSet = createSlice({
    name: "productSet",
    initialState: [],
    reducers: {
        setProductSet: (state, action) => {
            state.push(action.payload);
        },
    },
});






export const { setProductSet } = ProductSet.actions;
export default ProductSet.reducer;