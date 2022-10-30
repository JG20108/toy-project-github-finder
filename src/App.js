import React, { createContext, useReducer } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import { initialState, reducer } from './redux/store/reducer';

import Home from './windows/Home';
import Profile from './windows/ProfileScreen';
import Technologies from './windows/TechnologiesScreen';
import DetailedView from './windows/UserDetailsScreen';
import Login from './windows/LoginScreen';

import './App.css';

export const AuthContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <BrowserRouter>
        <Routes>
          {/* <Route path="/login" element={Login} /> */}
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
            path="/details"
            element={
              <>
                <DetailedView />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
