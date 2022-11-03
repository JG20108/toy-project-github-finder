import React, { useEffect, useState } from 'react';
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
  const { users, loading } = useSelector((state) => state.users);
  const [accessToken, setAccessToken] = useState([]);
  const [searchParams] = useSearchParams();
  const githubCode = searchParams.get('code');
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const client_secret = process.env.REACT_APP_CLIENT_SECRET;
  const redirect_uri = process.env.REACT_APP_REDIRECT_URI;

  // useEffect(() => {
  //   axios(
  //     `https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${githubCode}&redirect_uri=${redirect_uri}`,
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Access-Control-Allow-Origin': '*',
  //         Accept: 'application/json',
  //       },
  //     }
  //   )
  //     .then((response) => response.data)
  //     .then((responseData) => {
  //       setAccessToken(responseData.access_token);
  //       if (responseData.access_token) {
  //         localStorage.setItem('accessToken', responseData.access_token);
  //       }
  //       console.log(responseData);
  //     });
  // }, [githubCode]);

  // if (localStorage.getItem('accessToken') !== '') {
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
              </>
            )}
          </MDBRow>
        </MDBContainer>
        <Pagination></Pagination>
        <Footer></Footer>
      </>
    );
  // } else {
  //   return <Navigate to="/login" />;
  // }
}
