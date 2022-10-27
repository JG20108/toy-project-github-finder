import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import UserCards from './components/UserCards';
import Pagination from './components/Pagination';
import Profile from './components/Profile';
import Technologies from './components/Technologies';
import DetailedView from './components/DetailedView';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar></NavBar>
              <div className="ui container">
                <SearchBar></SearchBar>
                <MDBContainer>
                  <MDBRow>
                    <UserCards></UserCards>
                    <UserCards></UserCards>
                    <UserCards></UserCards>
                    <UserCards></UserCards>
                    <UserCards></UserCards>
                    <UserCards></UserCards>
                  </MDBRow>
                </MDBContainer>
              </div>
              <Pagination></Pagination>
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <NavBar />
              <Profile />
            </>
          }
        />
        <Route
          path="/technologies"
          element={
            <>
              <NavBar />
              <Technologies />
            </>
          }
        />
        <Route
          path="/details"
          element={
            <>
              <NavBar />
              <DetailedView />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
