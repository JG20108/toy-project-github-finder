import { configureStore } from '@reduxjs/toolkit';
import githubDataReducer from '../slices/githubFinderSlices'; // Updated import path
import githubUsersReducer, { authenticatedUserReducer } from '../slices/githubUsers'; // Ensure this is the correct import path after refactoring

export const store = configureStore({
  reducer: {
    githubData: githubDataReducer, // Updated to reflect new slice name
    users: githubUsersReducer, // Ensure this matches the exported reducer name
    authenticatedUser: authenticatedUserReducer, // Added authenticatedUser reducer
  },
});