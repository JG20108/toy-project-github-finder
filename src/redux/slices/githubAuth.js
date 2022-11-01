import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// create action for auth
export const authAction = createAsyncThunk(
  'auth',
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      // make http call
      const response = await axios.get(
        `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}`,
        {
          mode: 'no-cors',
          headers: {
            'Access-Control-Allow-Origin': '*'
          },
        }
      );
      console.log(response);
      return response;
    } catch (err) {
      if (!err?.response) {
        throw err;
      }
      return rejectWithValue(err?.response);
    }
  }
);

// Slice
// export const githubAuthSlice = createSlice({
//   name: 'auth',
//   initialState: { users: [], loading: false, error: null }, // initial state of the slice
//   extraReducers: (builder) => {
//     // users reducers
//     builder.addCase(fetchUsers.pending, (state, action) => {
//       state.loading = true;
//     });
//     builder.addCase(fetchUsers.fulfilled, (state, action) => {
//       state.loading = false;
//       state.users = action?.payload;
//       state.error = null;
//     });
//     builder.addCase(fetchUsers.rejected, (state, action) => {
//       state.loading = false;
//       state.users = [];
//       state.error = action?.payload;
//     });
//   },
// });
// export default githubUsersSlice.reducer;
