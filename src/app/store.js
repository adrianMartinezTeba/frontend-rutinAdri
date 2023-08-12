import { configureStore } from '@reduxjs/toolkit'
import exercises from '../features/exercises/exercisesSlice'
import users from '../features/users/usersSlice'

export const store = configureStore({
  reducer: {
    exercises,
    users
  },
})