import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching repositories
export const fetchReposAction = createAsyncThunk(
  'githubData/fetchRepos',
  async (username, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${username}/repos?per_page=15&sort=created:asc`);
      return data;
    } catch (err) {
      if (!err?.response) throw err;
      return rejectWithValue(err?.response);
    }
  }
);

// Async thunk for fetching user details
export const fetchUserDetailAction = createAsyncThunk(
  'githubData/fetchUserDetail',
  async (username, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${username}`);
      return data;
    } catch (err) {
      if (!err?.response) throw err;
      return rejectWithValue(err?.response);
    }
  }
);

// Unified slice for GitHub data
const githubDataSlice = createSlice({
  name: 'githubData',
  initialState: {
    repos: [],
    profile: {},
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    // Handle fetchReposAction
    builder
      .addCase(fetchReposAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchReposAction.fulfilled, (state, action) => {
        state.loading = false;
        state.repos = action.payload;
      })
      .addCase(fetchReposAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // Handle fetchUserDetailAction
    builder
      .addCase(fetchUserDetailAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserDetailAction.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(fetchUserDetailAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default githubDataSlice.reducer;
