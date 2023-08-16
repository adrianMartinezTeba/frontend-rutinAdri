import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import exercisesService from "./exercisesService";

const initialState = {
  exercises: [],
  exercise: null,
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
    .addCase(getExerciseById.fulfilled, (state, action) => {
      state.exercise = action.payload;
    })
    .addCase(getExerciseById.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getExerciseById.rejected, (state) => {
      state.isError = true;
    })
    .addCase(createExercise.fulfilled, (state, action) => {
      state.exercise = action.payload;
    })
    .addCase(createExercise.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(createExercise.rejected, (state) => {
      state.isError = true;
    })
  },
});

export const getAllExercises = createAsyncThunk("exercises/getAllExercises",
async (thunkAPI) => {
    try {
      return await exercisesService.getAllExercises();
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getExerciseById = createAsyncThunk("exercises/getExerciseById ",
async (id,thunkAPI) => {
    try {
      return await exercisesService.getExerciseById(id);
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const createExercise = createAsyncThunk("exercises/createEercis ",
async (exercise,thunkAPI) => {
    try {
      return await exercisesService.createExercise(exercise);
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const { reset } = exercisesSlice.actions;
export default exercisesSlice.reducer;