"use client";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";

export const store = configureStore({
  // chứa state tổng của cả ứng dụng
  reducer: {
    userSlice,
  },
});
