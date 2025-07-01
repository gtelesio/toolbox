import { configureStore } from '@reduxjs/toolkit'
import filesReducer from '../../features/files/files-slice'

export const store = configureStore({
  reducer: {
    files: filesReducer
  }
}) 