import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import routinesService from "./routinesService";

const initialState = {
  routines: [],
  routine: null,
  isLoading: false,
  isError: false,
  message:''
};
export const exercisesSlice = createSlice({
  name: "routines",
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

export const createRoutine = createAsyncThunk("exercises/createEercis ",
async (routine,thunkAPI) => {
    try {
      return await routinesService.createRoutine(routine);
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const { reset } = exercisesSlice.actions;
export default exercisesSlice.reducer;