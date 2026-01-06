import { createSlice } from "@reduxjs/toolkit";
import {
  requestExpert,
  getExpertRequests,
  approveExpert,
  rejectExpert,
} from "./roleActions";

const initialState = {
  loading: false,
  error: null,
  message: null,
  requests: [],
};

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    clearMessage: (state) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Author → request expert
      .addCase(requestExpert.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(requestExpert.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(requestExpert.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Admin → get all pending requests
      .addCase(getExpertRequests.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getExpertRequests.fulfilled, (state, action) => {
        state.loading = false;
        state.requests = action.payload;
      })
      .addCase(getExpertRequests.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Admin → approve expert request
      .addCase(approveExpert.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(approveExpert.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.data.message;
        state.requests = state.requests.filter(
          (req) => req._id !== action.payload.requestId
        );
      })
      .addCase(approveExpert.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Admin → reject expert request
      .addCase(rejectExpert.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(rejectExpert.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.data.message;
        state.requests = state.requests.filter(
          (req) => req._id !== action.payload.requestId
        );
      })
      .addCase(rejectExpert.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearMessage } = roleSlice.actions;
export default roleSlice.reducer;
