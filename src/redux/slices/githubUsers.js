import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const bearer = localStorage.getItem('accessToken');

// Authenticated user
export const fetchAuthenticatedUser = createAsyncThunk(
  'users/authenticated',
  async (accessToken, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(`https://api.github.com/user`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return data;
    } catch (err) {
      if (!err?.response) {
        throw err;
      }
      return rejectWithValue(err?.response);
    }
  }
);

// Gets users
export const fetchUsers = createAsyncThunk(
  'users/list',
  async (query, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/search/users?q=${query}&page=1&per_page=3`
      );
      return data?.items;
    } catch (err) {
      if (!err?.response) {
        throw err;
      }
      return rejectWithValue(err?.response);
    }
  }
);

// Default user extraction
export const fetchDefault = createAsyncThunk(
  'users/list',
  async (query, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/search/users?q=${query}&page=1&per_page=1`
      );
      return data?.items;
    } catch (err) {
      if (!err?.response) {
        throw err;
      }
      return rejectWithValue(err?.response);
    }
  }
);

// Follow a user
export const followUser = createAsyncThunk(
  'follow/user',
  async (user, { rejectWithValue, getState, dispatch }) => {
    try {
      const { response } = await axios(
        `https://cors-anywhere.herokuapp.com/https://api.github.com/user/following/${user}`,
        {
          method: 'PUT',
          mode: 'no-cors',
          headers: {
            Authorization: `Bearer ${bearer}`,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/vnd.github+json',
            // 'Content-Length': 0,
          },
        }
      );
      return response;
    } catch (err) {
      if (!err?.response) {
        throw err;
      }
      return rejectWithValue(err?.response);
    }
  }
);

// Slice for users
export const githubUsersSlice = createSlice({
  name: 'users',
  initialState: { users: [], loading: false, error: null }, // initial state of the slice
  extraReducers: (builder) => {
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

// Slice for Authenticated user
export const githubAuthenticatedUserSlice = createSlice({
  name: 'authenticatedUser',
  initialState: { user: {}, loading: false, error: null },
  extraReducers: (builder) => {
    builder.addCase(fetchAuthenticatedUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchAuthenticatedUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action?.payload;
      state.error = null;
    });
    builder.addCase(fetchAuthenticatedUser.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action?.payload;
    });
  },
});

export default githubUsersSlice.reducer;
