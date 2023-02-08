import {configureStore} from '@reduxjs/toolkit';
//... slices
import userReducer from './slices/user.slice';
import ladderReducer from './slices/ladder.slice';
import playersReducer from './slices/players.slice';

const store = configureStore({
    reducer: {
        user: userReducer,
        ladder: ladderReducer,
        players: playersReducer,
        // ... other reducers
    }
});

export default store;