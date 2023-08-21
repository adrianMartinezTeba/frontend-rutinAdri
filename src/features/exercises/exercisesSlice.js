import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import exercisesService from "./exercisesService";
const exercise = JSON.parse(localStorage.getItem("exercise"));
const initialState = {
  exercises: [],
  exercise: exercise ? exercise : null,
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
    .addCase(getExerciseByName.fulfilled, (state, action) => {
      state.exercises = action.payload;
    })
    .addCase(getExerciseByName.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getExerciseByName.rejected, (state) => {
      state.isError = true;
    })
    .addCase(getExerciseByType.fulfilled, (state, action) => {
      state.exercises = action.payload;
    })
    .addCase(getExerciseByType.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getExerciseByType.rejected, (state) => {
      state.isError = true;
    })
    .addCase(getExerciseByDifficulty.fulfilled, (state, action) => {
      state.exercises = action.payload;
    })
    .addCase(getExerciseByDifficulty.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getExerciseByDifficulty.rejected, (state) => {
      state.isError = true;
    })
    .addCase(getExerciseByMuscleZonePrincipal.fulfilled, (state, action) => {
      state.exercises = action.payload;
    })
      .addCase(getExerciseByMuscleZoneSecundaries.fulfilled, (state, action) => {
      state.exercises = action.payload;
    })
    .addCase(getExerciseByMuscleZoneSecundaries.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getExerciseByMuscleZoneSecundaries.rejected, (state) => {
      state.isError = true;
    })
    .addCase(getExerciseByMuscleZonePrincipal.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getExerciseByMuscleZonePrincipal.rejected, (state) => {
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
export const getExerciseByName = createAsyncThunk("exercises/getExerciseByName ",
async (name,thunkAPI) => {
    try {
      return await exercisesService.getExerciseByName(name);
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getExerciseByType = createAsyncThunk("exercises/getExerciseByType",
  async (type, thunkAPI) => {
    try {
      return await exercisesService.getExerciseByType(type);
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.message); // Pasar el mensaje de error
    }
  }
);

export const getExerciseByDifficulty = createAsyncThunk("exercises/getExerciseByDifficulty",
  async (difficulty, thunkAPI) => {
    try {
      return await exercisesService.getExerciseByDifficulty(difficulty);
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.message); // Pasar el mensaje de error
    }
  }
);

export const getExerciseByMuscleZoneSecundaries = createAsyncThunk("exercises/getExerciseByMuscleZoneSecundaries",
  async (muscleZoneSecundaries, thunkAPI) => {
    try {
      return await exercisesService.getExerciseByMuscleZoneSecundaries(muscleZoneSecundaries);
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.message); // Pasar el mensaje de error
    }
  }
);

export const getExerciseByMuscleZonePrincipal = createAsyncThunk("exercises/getExerciseByMuscleZonePrincipal",
  async (muscleZonePrincipal, thunkAPI) => {
    try {
      return await exercisesService.getExerciseByMuscleZonePrincipal(muscleZonePrincipal);
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.message); // Pasar el mensaje de error
    }
  }
);
export const createExercise = createAsyncThunk("exercises/create",
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