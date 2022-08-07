import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { cartSlice } from './Cart'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
  },
})