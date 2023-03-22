import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDetails = createAsyncThunk('detail/getDetails', async (id) => {
  const res = await axios(`https://api.coinstats.app/public/v1/coins/${id}`);
  return res.data;
});

const initialState = {
  detail: [],
  status: 'idle',
  error: null,
};

const detailSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDetails.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(fetchDetails.fulfilled, (state, action) => ({
      ...state,
      detail: action.payload.coin,
      status: 'succeeded',
    }));
    builder.addCase(fetchDetails.rejected, (state, action) => ({
      ...state,
      status: 'failed',
      error: action.error.message,
    }));
  },
});

export const selectDetails = (state) => state.details.detail;
export const selectDetailsStatus = (state) => state.details.status;
export default detailSlice.reducer;
