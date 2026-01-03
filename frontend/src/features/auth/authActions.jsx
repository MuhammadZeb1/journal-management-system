import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/authApi.js"; // <- correct axios instance

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await API.post("/auth/register", userData); // use API instance
      console.log("response", res);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await API.post("/auth/login", userData); // use API instance
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);
