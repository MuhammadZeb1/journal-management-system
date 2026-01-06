import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/authApi.js";

// ✅ Author → submit expert request
export const requestExpert = createAsyncThunk(
  "role/requestExpert",
  async (message, { rejectWithValue }) => {
    try {
      // backend route: /api/roles/expert/request
      const res = await API.post("/roles/expert/request", { message });
      return res.data; // { message: "Expert request submitted successfully" }
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// ✅ Admin → get all pending expert requests
export const getExpertRequests = createAsyncThunk(
  "role/getExpertRequests",
  async (_, { rejectWithValue }) => {
    try {
      // backend route: /api/roles/expert/all
      const res = await API.get("/roles/expert/all");
      return res.data; // array of requests
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// ✅ Admin → approve expert request
export const approveExpert = createAsyncThunk(
  "role/approveExpert",
  async (requestId, { rejectWithValue }) => {
    try {
      // backend route: /api/roles/expert/approve/:requestId
      const res = await API.post(`/roles/expert/approve/${requestId}`);
      return { data: res.data, requestId }; // { message: "User approved as Expert" }
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// ✅ Admin → reject expert request
export const rejectExpert = createAsyncThunk(
  "role/rejectExpert",
  async (requestId, { rejectWithValue }) => {
    try {
      // backend route: /api/roles/expert/reject/:requestId
      const res = await API.post(`/roles/expert/reject/${requestId}`);
      return { data: res.data, requestId }; // { message: "Expert request rejected" }
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);
