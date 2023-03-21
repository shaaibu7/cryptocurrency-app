import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './HomeSlice/CryptoSlice';

const store = configureStore({
  reducer: {
    cryptos: cryptoReducer,
  },
});

export default store;
