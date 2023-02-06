import {configureStore} from '@reduxjs/toolkit';
//... slices
import userReducer from './slices/user.slice';
import ladderReducer from './slices/ladder.slice';

const store = configureStore({
    reducer: {
        user: userReducer,
        ladder: ladderReducer,
        // ... other reducers
    }
});

export default store;