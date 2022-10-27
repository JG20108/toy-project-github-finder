import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// create action for users
export const fetchUsers = createAsyncThunk(
  'users/list',
  async (query, { rejectWithValue, getState, dispatch }) => {
    try {
      // make http call
      const { data } = await axios.get(
        // `https://api.github.com/users/${query}`
        // `https://api.github.com/search/users?q=repos:followers:<1000&language:javascript&page=1&per_page=24`
        `https://api.github.com/search/users?q=${query}+repos:%3E42+followers:%3E1000`
      );
      return data;
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
  initialState: { user: '' },
  extraReducers: (builder) => {
    // users reducers
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action?.payload;
      state.error = undefined;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = undefined;
      state.error = action?.payload;
    });
  },
});

export default githubUsersSlice.reducer;
