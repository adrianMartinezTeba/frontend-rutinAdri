import { configureStore } from '@reduxjs/toolkit'
import exercises from '../features/exercises/exercisesSlice'
import users from '../features/users/usersSlice'
import routines from '../features/routines/routinesSlice'
export const store = configureStore({
  reducer: {
    exercises,
    users,
    routines
  },
})