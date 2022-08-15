import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers.js/reducer";

const store = configureStore({
    reducer: {
        coffee: reducer
    }
})

export default store;