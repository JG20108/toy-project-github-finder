import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

import Home from './windows/Home';
import Profile from './windows/ProfileScreen';
import Technologies from './windows/TechnologiesScreen';
import DetailedView from './windows/UserDetailsScreen';

import './App.css';

const App = () => {
  return (
    
      <BrowserRouter>
        <Routes>
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
