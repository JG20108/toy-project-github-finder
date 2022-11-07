import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import UserCards from './components/UserCards';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import { MDBContainer, MDBRow, MDBSpinner } from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, fetchDefault } from '../redux/slices/githubUsers';

export default function Home() {
  const {
    users,
    loading,
    page,
    debouncedTerm: query,
    per_page,
  } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (query !== '') {
      dispatch(fetchUsers({ query, page, per_page }));
    } else {
      const defaultUser = 'github';
      dispatch(fetchDefault({ defaultUser, page, per_page }));
    }
  }, [dispatch, query, page]);

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
