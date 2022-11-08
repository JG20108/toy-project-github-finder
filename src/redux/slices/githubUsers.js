import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const { Octokit } = require('@octokit/rest');

const bearer = localStorage.getItem('accessToken');

const octokit = new Octokit({
  auth: `${bearer}`,
});

// Authenticated user
export const fetchAuthenticatedUser = createAsyncThunk(
  'users/authenticated',
  async (accessToken, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(`https://api.github.com/user`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Length': '0',
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
  async (
    { query, per_page, page },
    { rejectWithValue, getState, dispatch }
  ) => {
    try {
      console.log('query', query);
      const { data } = await axios.get(
        `https://api.github.com/search/users?q=${query}&page=${page}&per_page=${per_page}`
      );
      return { items: data?.items, total_count: data?.total_count };
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
  async (
    { defaultUser, per_page, page },
    { rejectWithValue, getState, dispatch }
  ) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/search/users?q=${defaultUser}&page=${page}&per_page=${per_page}`
      );
      return { items: data?.items, total_count: data?.total_count };
    } catch (err) {
      if (!err?.response) {
        throw err;
      }
      return rejectWithValue(err?.response);
    }
  }
);

export const checkFollowedUser = createAsyncThunk(
  'follow/user',
  async (user, { rejectWithValue, getState, dispatch }) => {
    try {
      const response = await axios.get(
        `https://api.github.com/user/following/${user}`,
        {
          headers: {
            Authorization: `Bearer ${bearer}`,
          },
        }
      );
      console.log('response', response);
      return response.status;
    } catch (err) {
      if (!err?.response) {
        throw err;
      }
      return rejectWithValue(err?.response);
    }
  }
);

export const followUser = createAsyncThunk(
  'follow/user',
  async (user, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.put(
        `https://api.github.com/user/following/${user}`,
        {
          headers: {
            Authorization: `Bearer ${bearer}`,
            Accept: 'application/vnd.github.v3+json',
            'Content-Length': '0',
          },
        },
        {
          headers: {
            Authorization: `Bearer ${bearer}`,
            Accept: 'application/vnd.github.v3+json',
            'Content-Length': '0',
          },
        }
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

export const unfollowUser = createAsyncThunk(
  'unfollow/user',
  async (user, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.delete(
        `https://api.github.com/user/following/${user}`,
        {
          headers: {
            Authorization: `Bearer ${bearer}`,
            Accept: 'application/vnd.github.v3+json',
          },
        },
        {
          headers: {
            Authorization: `Bearer ${bearer}`,
            Accept: 'application/vnd.github.v3+json',
          },
        }
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

// Slice for users
export const githubUsersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null,
    per_page: 6,
    page: 1,
    total_pages: null,
    debouncedTerm: '',
  }, // initial state of the slice
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      const { items, total_count } = action.payload;
      state.loading = false;
      state.users = items;
      state.error = null;
      if (state.page === 1) {
        state.total_pages = Math.ceil(total_count / state.per_page);
        if (state.total_pages > 167) {
          state.total_pages = 167;
        }
      }
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action?.payload;
    });
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action?.payload;
    },
    setDebouncedTerm: (state, action) => {
      state.debouncedTerm = action?.payload;
    },
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
export const { setPage, setDebouncedTerm } = githubUsersSlice.actions;
