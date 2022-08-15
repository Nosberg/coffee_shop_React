import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };

const coffeeList = createSlice({
    name: 'cofeeList',
    initialState,
    reducers: {
        getCoffeeList(state, action) {
            state.value = action.payload;
        }
    }
});

const {actions, reducer} = coffeeList;
export default reducer;

export const { getCoffeeList } = actions;