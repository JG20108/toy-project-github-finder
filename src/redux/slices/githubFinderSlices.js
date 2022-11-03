import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch Repos
export const fetchReposAction = createAsyncThunk(
  'repos/list',
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${payload}/repos?per_page=15&sort=created:asc`
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

// Gets user detailed profile
export const fetchUserDetailAction = createAsyncThunk(
  'profile/list',
  async (user, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${user}`);
      return data;
    } catch (err) {
      if (!err?.response) {
        throw err;
      }
      return rejectWithValue(err?.response);
    }
  }
);

// Slice for repos
const reposSlices = createSlice({
  name: 'repos',
  initialState: {user:''},
  extraReducers: (builder) => {
    builder.addCase(fetchReposAction.pending, (state, actions) => {
      state.loading = true;
    });
    builder.addCase(fetchReposAction.fulfilled, (state, action) => {
      state.loading = false;
      state.reposList = action?.payload;
      state.error = undefined;
    });
    builder.addCase(fetchReposAction.rejected, (state, action) => {
      state.loading = false;
      state.reposList = undefined;
      state.error = action?.payload;
    })

    // Slice for fetching users
    builder.addCase(fetchUserDetailAction.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(fetchUserDetailAction.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action?.payload;
      state.error = undefined;
    });
    builder.addCase(fetchUserDetailAction.rejected, (state, action) => {
      state.loading = false;
      state.profile = undefined;
      state.error = action?.payload;
    })
  },
});

export default reposSlices.reducer;