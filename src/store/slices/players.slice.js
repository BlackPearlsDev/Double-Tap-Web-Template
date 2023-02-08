import { createSlice } from "@reduxjs/toolkit";

const playersSlice = createSlice({

    name: "players",
    initialState: {
        listPlayers: [],
    },
    reducers: {
        loadPlayers(state, action) {
            state.listPlayers = [...action.payload];
        }
    },

});

export const {loadPlayers} = playersSlice.actions;

export default playersSlice.reducer;