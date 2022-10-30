import React from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import UserCards from './components/UserCards';
import Pagination from './components/Pagination';
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';

export default function Home() {
  const { users, loading } = useSelector((state) => state.users); // Get users from store

  return (
    <>
      <NavBar></NavBar>
      <MDBContainer>
        <SearchBar></SearchBar>
        <MDBRow>
          {loading ? (
            <h1>Loading</h1>
          ) : (
            <>
              {users.length !== 0 &&
                users.map((user) => (
                  <UserCards key={user.id} user={user}></UserCards> 
                ))}
            </> // If loading is false, show users
          )}
        </MDBRow>
      </MDBContainer>
      <Pagination></Pagination>
    </>
  );
}
