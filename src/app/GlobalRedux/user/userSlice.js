"use client";
import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./userThunk";
import { userLocal } from "@/services/user/userLocal";

const initialState = {
  inforUser: userLocal.get(),
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    logoutAction: (state, action) => {
      state.inforUser = null;
      userLocal.remove();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      console.log(action.payload.content);
      state.inforUser = action.payload.content;
      userLocal.set(action.payload.content);
    });
  },
});

export const { logoutAction } = userSlice.actions;

export default userSlice.reducer;
