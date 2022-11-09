import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './slices/ui';
import cartReducer from './slices/cart';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer
  },
});
