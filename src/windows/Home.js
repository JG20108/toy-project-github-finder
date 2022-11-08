import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import UserCards from './components/UserCards';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import { MDBContainer, MDBRow, MDBSpinner } from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { fetchUsers, fetchDefault, fetchAuthenticatedUser } from '../redux/slices/githubUsers';
import { useNavigate } from 'react-router';
const { Octokit } = require("@octokit/rest");

export default function Home() {

  const navigate = useNavigate();

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

  const {
    users,
    loading,
    page,
    debouncedTerm: query,
    per_page,
  } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const bearer = localStorage.getItem('accessToken');

  // eslint-disable-next-line no-unused-vars
  const octokit = new Octokit({
    auth: `${bearer}`
  })

  useEffect(() => {
    if (query !== '') {
      dispatch(fetchUsers({ query, page, per_page }));
    } else {
      const defaultUser = 'github';
      dispatch(fetchDefault({ defaultUser, page, per_page }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
