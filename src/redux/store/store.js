import { configureStore } from '@reduxjs/toolkit';
import reposReducer from '../slices/githubFinderSlices';

export const store = configureStore({
  reducer: {
    repos: reposReducer,
  },
});
