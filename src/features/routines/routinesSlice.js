import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import routinesService from "./routinesService";

const initialState = {
  routines: [],
  routine: null,
  isLoading: false,
  isError: false,
  message:''
};
export const routinesSlice = createSlice({
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
    .addCase(createRoutine.fulfilled, (state, action) => {
 
    })
    .addCase(createRoutine.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(createRoutine.rejected, (state) => {
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
export const { reset } = routinesSlice.actions;
export default routinesSlice.reducer;