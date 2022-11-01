import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// create action for users
export const fetchUsers = createAsyncThunk(
  'users/list',
  async (query, { rejectWithValue, getState, dispatch }) => {
    try {
      // make http call
      const { data } = await axios.get(
        `https://api.github.com/search/users?q=${query}&page=1&per_page=3`
      );
      // console.log(data);
      return data?.items;
    } catch (err) {
      if (!err?.response) {
        throw err;
      }
      return rejectWithValue(err?.response);
    }
  }
);

// create action for users
export const fetchDefault = createAsyncThunk(
  'users/list',
  async (query, { rejectWithValue, getState, dispatch }) => {
    try {
      // make http call
      const { data } = await axios.get(
        `https://api.github.com/search/users?q=${query}&page=1&per_page=1`
      );
      // console.log(data);
      return data?.items;
    } catch (err) {
      if (!err?.response) {
        throw err;
      }
      return rejectWithValue(err?.response);
    }
  }
);

// Slice
const githubUsersSlice = createSlice({
  name: 'users',
  initialState: { users: [], loading: false, error: null }, // initial state of the slice
  extraReducers: (builder) => {
    // users reducers
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action?.payload;
      state.error = null;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action?.payload;
    });
  },
});

// Slice
export const githubDefaultSlice = createSlice({
  name: 'users',
  initialState: { users: [], loading: false, error: null }, // initial state of the slice
  extraReducers: (builder) => {
    // users reducers
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action?.payload;
      state.error = null;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action?.payload;
    });
  },
});
export default githubUsersSlice.reducer;
