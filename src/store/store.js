import {configureStore} from '@reduxjs/toolkit';
import userReducer from './UserSlice';
import postReducer from './PostSlice';

export const store = configureStore({
    reducer:{
        user: userReducer,
        posts: postReducer,
    },
})

export default store;