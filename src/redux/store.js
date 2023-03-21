import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './HomeSlice/CryptoSlice';
import detailReducer from './DetailsSlice/DetailsSlice';

const store = configureStore({
  reducer: {
    cryptos: cryptoReducer,
    details: detailReducer,
  },
});

export default store;
