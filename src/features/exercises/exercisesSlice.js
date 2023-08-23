import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import exercisesService from "./exercisesService";
const exercise = JSON.parse(localStorage.getItem("exercise"));
const initialState = {

  exercises:[],
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
    .addCase(getExercisesByName.fulfilled, (state, action) => {
      state.exercises = action.payload;
    })
    .addCase(getExercisesByName.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getExercisesByName.rejected, (state) => {
      state.isError = true;
    })
    .addCase(getExercisesByEquipment.fulfilled, (state, action) => {
      state.exercises = action.payload;
    })
    .addCase(getExercisesByEquipment.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getExercisesByEquipment.rejected, (state) => {
      state.isError = true;
    })
    .addCase(getExercisesByDifficulty.fulfilled, (state, action) => {
      state.exercises = action.payload;
    })
    .addCase(getExercisesByDifficulty.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getExercisesByDifficulty.rejected, (state) => {
      state.isError = true;
    })
    .addCase(getExercisesByMuscleZonePrincipal.fulfilled, (state, action) => {
      state.exercises = action.payload;
    })
    .addCase(getExercisesByMuscleZonePrincipal.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getExercisesByMuscleZonePrincipal.rejected, (state) => {
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
export const getExercisesByName = createAsyncThunk("exercises/getExercisesByName ",
async (name,thunkAPI) => {
    try {
      return await exercisesService.getExercisesByName(name);
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getExercisesByEquipment = createAsyncThunk("exercises/getExercisesByEquipment",
  async (type, thunkAPI) => {
    try {
      return await exercisesService.getExercisesByEquipment(type);
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.message); // Pasar el mensaje de error
    }
  }
);

export const getExercisesByDifficulty = createAsyncThunk("exercises/getExercisesByDifficulty",
  async (difficulty, thunkAPI) => {
    try {
      return await exercisesService.getExercisesByDifficulty(difficulty);
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.message); // Pasar el mensaje de error
    }
  }
);

export const getExercisesByMuscleZonePrincipal = createAsyncThunk("exercises/getExercisesByMuscleZonePrincipal",
  async (muscleZonePrincipal, thunkAPI) => {
    try {
      return await exercisesService.getExercisesByMuscleZonePrincipal(muscleZonePrincipal);
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