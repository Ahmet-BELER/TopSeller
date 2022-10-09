import { configureStore } from '@reduxjs/toolkit'
import hotBidsSlice from './slices/hotBidsSlice'
import topSellerSlice from './slices/topSellerSlice'

export const store = configureStore({
  reducer: {
    hotBids: hotBidsSlice,
    topSellers: topSellerSlice

  },
})