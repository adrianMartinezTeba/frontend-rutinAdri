import { configureStore } from '@reduxjs/toolkit'
import exercises from '../features/exercises/exercisesSlice'

export const store = configureStore({
  reducer: {
    exercises
  },
})