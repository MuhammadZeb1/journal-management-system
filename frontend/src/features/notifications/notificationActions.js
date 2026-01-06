import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/authApi.js";

export const fetchNotifications = createAsyncThunk(
  "notifications/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/notifications");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);
