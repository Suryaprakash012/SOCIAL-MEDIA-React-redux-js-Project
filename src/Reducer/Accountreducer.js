import { createSlice } from "@reduxjs/toolkit";

const initialState = [

];

const accountSlice = createSlice({
  name: 'Account',
  initialState,
  reducers: {
    addaccount: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const selectAllaccount = (state) => state.Account;

export const { addaccount } = accountSlice.actions;
export default accountSlice.reducer;
