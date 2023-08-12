import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import exercisesService from "./exercisesService";

const initialState = {
  exercises: [],
  isLoading: false,
  isError: false,
  message:''
};
export const exercisesSlice = createSlice({
  name: "exercises",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.message = '';

    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getAllExercises.fulfilled, (state, action) => {
      state.exercises = action.payload;
    })
    .addCase(getAllExercises.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getAllExercises.rejected, (state) => {
      state.isError = true;
    })
  },
});

export const getAllExercises = createAsyncThunk("exercises/getAllExercises",
async () => {
    try {
      return await exercisesService.getAllExercises();
    } catch (error) {
      console.error(error);
    }
  }
);

export const { reset } = exercisesSlice.actions;
export default exercisesSlice.reducer;