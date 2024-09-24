import { userSer } from "@/services/user/userSer";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginThunk = createAsyncThunk(
  "user/loginThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await userSer.login(payload);

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
