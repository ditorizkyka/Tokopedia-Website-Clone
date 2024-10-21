import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./reducer/ProductSet";

const Store = configureStore({
    reducer: {
        productSet: ProductReducer,
    }
});

console.log("oncreate store : ", Store.getState());

Store.subscribe(() => {
    console.log("STORE CHANGE : ", Store.getState());
});

export default Store;
