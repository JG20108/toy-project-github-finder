import React from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import UserCards from './components/UserCards';
import Pagination from './components/Pagination';
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <MDBContainer>
        <SearchBar></SearchBar>
        <MDBRow>
          <UserCards></UserCards>
          <UserCards></UserCards>
          <UserCards></UserCards>
          <UserCards></UserCards>
          <UserCards></UserCards>
          <UserCards></UserCards>
        </MDBRow>
      </MDBContainer>
      <Pagination></Pagination>
    </>
  );
}
