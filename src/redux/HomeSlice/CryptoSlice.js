import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.coinstats.app/public/v1/coins';

// eslint-disable-next-line import/prefer-default-export
export const fetchCryptos = createAsyncThunk('cryptos/fetchCryptos', async () => {
  const res = await axios.get(url);
  return res.data.coins;
});

const initialState = {
  cryptos: [],
  status: 'idle',
  error: null,
};

const cryptosSlice = createSlice({
  name: 'cryptos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCryptos.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(fetchCryptos.fulfilled, (state, action) => ({
      ...state,
      status: 'succesful',
      cryptos: action.payload,
    }));
    builder.addCase(fetchCryptos.rejected, (state, action) => ({
      ...state,
      status: 'failed',
      error: action.error.message,
    }));
  },
});

export const selectCryptos = (state) => state.cryptos.cryptos;
export const selectCryptoStatus = (state) => state.cryptos.status;
export default cryptosSlice.reducer;
