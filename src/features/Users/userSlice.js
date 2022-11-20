import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  name:"",
  email:"",

};



export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  
    logout: (state) => {
      state.name = null;
      state.email = null;
    },
  },


});

export const { login, logout} = userSlice.actions;

// Selectors :- They allow us to pull information
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;

export default userSlice.reducer;