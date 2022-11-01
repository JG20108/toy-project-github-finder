import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import UserCards from './components/UserCards';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
  const { users, loading } = useSelector((state) => state.users); // Get users from store
  const [searchParams] = useSearchParams();
  const githubCode = searchParams.get('code');

  useEffect(() => {
    if (githubCode) {
      (async () => {
        const response = await axios.post(
          `https://github.com/login/oauth/access_token&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&code=${githubCode}`,
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
            },
          }
        );
        console.log(response);
      })();
    }
  }, [githubCode]);
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
      <br />
      <Footer></Footer>
    </>
  );
}
