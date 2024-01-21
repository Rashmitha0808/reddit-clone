import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from '../API/axios'
import requests from "../API/Request";

export const signUpUser = createAsyncThunk(
    "user/signUpUser",
    async(userData) =>{
        try{
            const response = await api.post(requests.signup,{...userData});
            return response.data;
        }catch(error){
            return Promise.reject(error.response.data);
        }
    }
);
export const logInUser = createAsyncThunk(
    "user/logInUser",
    async(userData)=>{
        try{
            const response = await api.post(requests.signup,{...userData});
            return response.data;
        }catch(error){
            return Promise.reject(error.response.data);
        }
    }
);

const initialState = {
    authenticated: false,
    loading: false,
    user: null,
    error: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        isUserLoggedIn(state){
            const token = localStorage.getItem("reddit_token");

            if(token){
                const user = localStorage.getItem("reddit_user");
                state.authenticated = true;
                state.token = true;
                state.user = user;
            }
        },
        logOutUser(){
            localStorage.removeItem("reddit_token");
            localStorage.removeItem("reddit_user");
            return initialState;
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(signUpUser.pending,(state)=>{
            state.loading = true;
        })
        .addCase(signUpUser.fulfilled, (state,{payload})=>{
            state.authenticated = true;
            console.log("fulfilled", payload);
            const {token, data}= payload;
            state.user = data.user;
            localStorage.setItem("reddit_token", token);
            localStorage.setItem("reddit_user", JSON.stringify(data.user));
            state.loading = false;
            state.error = null;
        })
        .addCase(signUpUser.rejected, (state, {error})=>{
            state.loading = false;
            state.error = error.message;
            state.authenticated = false;
        })
        .addCase(logInUser.pending, (state)=>{
            state.loading = true;
        })
        .addCase(logInUser.fulfilled,(state,{payload})=>{
            state.authenticated = true;
            // console.log("fulfilled", payload);
            const {token,data} = payload;
            state.user = data.user;
            localStorage.setItem("reddit_token",token);
            localStorage.setItem("reddit_user", JSON.stringify(data.user));
            state.loading = false;
            state.error = null;
        })
        .addCase(logInUser.rejected,(state,{error})=>{
            state.loading = false;
            state.error = error.message;
            state.authenticated = false;
        });
    }
})
export const {isUserLoggedIn, logOutUser} = userSlice.actions;
export default userSlice.reducer;