import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlicer";
import restaurantReducer from "./restaurantSlice"

const store = configureStore({
    reducer:{
        cartslice: CartReducer,
        restaurant: restaurantReducer,
    }
})

export {store};