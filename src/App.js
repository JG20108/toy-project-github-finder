import React, { useState, useEffect } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { DarkModeProvider } from './contexts/DarkModeContext';

import PrivateRoute from './windows/components/privateRoute';
import PublicRoute from './windows/components/publicRoute';

import Home from './windows/Home';
import Profile from './windows/ProfileScreen';
import Technologies from './windows/TechnologiesScreen';
import DetailedView from './windows/UserDetailsScreen';
import Login from './windows/LoginScreen';

import './App.css';

const App = () => {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <PublicRoute>
                  <Login />
                </PublicRoute>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              </>
            }
          />
          <Route
            path="/technologies"
            element={
              <>
                <PrivateRoute>
                  <Technologies />
                </PrivateRoute>
              </>
            }
          />
          <Route
            path="/details/:user"
            element={
              <>
                <PrivateRoute>
                  <DetailedView />
                </PrivateRoute>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
};

export default App;

