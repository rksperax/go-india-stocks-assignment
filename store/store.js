import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import slideReducer from './slices/sidedSlice'

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    sidebarReducer:slideReducer
  },
})