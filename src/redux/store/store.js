import { configureStore } from '@reduxjs/toolkit';
import reposReducer from '../slices/githubFinderSlices';
import {githubUsersSlice, githubAuthenticatedUserSlice} from '../slices/githubUsers';

export const store = configureStore({
  reducer: {
    repos: reposReducer,
    users: githubUsersSlice.reducer,
    authenticatedUser: githubAuthenticatedUserSlice.reducer,
  },
});