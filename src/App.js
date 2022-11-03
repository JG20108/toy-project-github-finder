import React, { useState, useEffect } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Navigate,
} from 'react-router-dom';

import Home from './windows/Home';
import Profile from './windows/ProfileScreen';
import Technologies from './windows/TechnologiesScreen';
import DetailedView from './windows/UserDetailsScreen';
import Login from './windows/LoginScreen';

import './App.css';

var minutes = 10;

var now = new Date().getTime();
var setupTime = localStorage.getItem('setupTime');
if (setupTime == null) {
  localStorage.setItem('setupTime', now);
} else {
  if (now - setupTime > minutes * 60 * 1000) {
    localStorage.setItem('accessToken', '');
    localStorage.setItem('setupTime', now);
  }
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Profile />
            </>
          }
        />
        <Route
          path="/technologies"
          element={
            <>
              <Technologies />
            </>
          }
        />
        <Route
          path="/details/:user"
          element={
            <>
              <DetailedView />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
