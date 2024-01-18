import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: ""
}
export const PostSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        createPost:(state,action)=>{
            return [...state, action.payload];
        },
    }
})
export const {createPost} = PostSlice.actions;
export default PostSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// export const createPost = (post)=>({
//     type:'CREATE_POST',
//     payload: post,
// })
// const postReducer = (state = [], action)=>{
//     switch(action.type){
//         case 'CREATE_POST':
//             return[...state, action.payload];

//             default:
//                 return state;
//     }
// }
