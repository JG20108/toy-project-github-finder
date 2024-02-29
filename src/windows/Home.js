import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import UserCards from './components/UserCards';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import { MDBContainer, MDBRow, MDBSpinner } from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, fetchDefault } from '../redux/slices/githubUsers'; // Removed unused import
import { useNavigate } from 'react-router';
const { Octokit } = require("@octokit/rest");

export default function Home() {
  // Navigation hook for redirecting users
  const navigate = useNavigate();

  // Session timeout logic
  var minutes = 10;
  var now = new Date().getTime();
  var setupTime = localStorage.getItem('setupTime');
  if (setupTime == null) {
    localStorage.setItem('setupTime', now);
  } else {
    if (now - setupTime > minutes * 60 * 1000) {
      localStorage.setItem('setupTime', now);
      navigate('/login');
    }
  }

  // Redux state for user data and loading state
  const { users, loading, page, debouncedTerm: query, per_page } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  // GitHub API authentication
  const bearer = localStorage.getItem('accessToken');
  const octokit = new Octokit({ auth: `${bearer}` });

  // Fetch users or default user based on query
  useEffect(() => {
    if (query !== '') {
      dispatch(fetchUsers({ query, page, per_page }));
    } else {
      const defaultUser = 'github';
      dispatch(fetchDefault({ defaultUser, page, per_page }));
    }
  }, [dispatch, query, page, bearer]);

  return (
    <>
      <NavBar></NavBar>
      <MDBContainer>
        <SearchBar></SearchBar>
        <MDBRow>
          {loading ? (
            <div className=" d-flex justify-content-center">
              <MDBSpinner
                color="primary"
                className="me-2"
                style={{ width: '12rem', height: '12rem' }}
              ></MDBSpinner>
            </div>
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
      <Pagination
        style={{ justifyContent: 'center', alignItems: 'center' }}
      ></Pagination>
      <Footer></Footer>
    </>
  );
}