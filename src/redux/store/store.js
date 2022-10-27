import { configureStore } from '@reduxjs/toolkit';
import reposReducer from '../slices/githubFinderSlices';
import usersReducer from '../slices/githubUsers';

export const store = configureStore({
  reducer: {
    repos: reposReducer,
    users: usersReducer,
  },
});