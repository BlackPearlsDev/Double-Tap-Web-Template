import { createSlice } from "@reduxjs/toolkit";

const ladderSlice = createSlice({

    name: "ladder",
    initialState: {
        listLadder: [],
    },
    reducers: {
        loadLadder(state, action) {
            state.listLadder = [...action.payload]; // DEFAULT: [...action.payload] 
        }
    },

});

export const {loadLadder} = ladderSlice.actions;

export default ladderSlice.reducer;