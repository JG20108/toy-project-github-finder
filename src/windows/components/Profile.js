import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useId } from 'react';
import Container from 'react-bootstrap/Container';
import { fetchAuthenticatedUser } from '../../redux/slices/githubUsers';
import { fetchReposAction } from '../../redux/slices/githubFinderSlices';
import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from 'mdb-react-ui-kit';

export default function DetailedView() {
  const repoIds = useId();

  const accessToken = localStorage.getItem('accessToken');
  const { user, loading, error } = useSelector(
    (state) => state.authenticatedUser
  );

  const username = user?.login;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAuthenticatedUser(accessToken));
  }, [dispatch, accessToken]);

  const dispatchRepos = useDispatch();
  useEffect(() => {
    dispatchRepos(fetchReposAction(username));
  }, [dispatchRepos, username]);

  const store = useSelector((state) => state?.repos);
  const { reposList } = store;

  if (localStorage.getItem('accessToken') === '') {
    return (
      <Container style={{ paddingTop: '2%' }}>
        <h2 style={{ textAlign: 'center' }}>
          Please login through the GitHub login page
        </h2>
      </Container>
    );
  } else {
    return (
      <section style={{ backgroundColor: '#eee', height: '100vh' }}>
        <MDBContainer className="py-3">
          {loading ? (
            <h1 className="text-center">Loading data please wait...</h1>
          ) : error ? (
            <h2>{error?.message}</h2>
          ) : (
            <MDBRow>
              <MDBCol lg="4">
                <MDBCard className="mb-4">
                  <MDBCardBody className="text-center">
                    <MDBCardImage
                      src={user?.avatar_url}
                      alt=""
                      className="rounded-circle"
                      style={{ width: '150px' }}
                      fluid
                    />
                    <p className="text-muted mb-1"> ID: {user?.id} </p>
                    <p className="text-muted mb-1"> Full Name: {user?.name} </p>
                    <p className="text-muted mb-4"> Username: {user?.login}</p>
                    
                    <p className="text-muted mb-4">
                      {' '}
                      Followers: {user?.followers}
                    </p>
                    <p className="text-muted mb-4">
                      {' '}
                      Following: {user?.following}
                    </p>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-4 mb-lg-0">
                  <MDBCardBody className="p-0">
                    <MDBListGroup className="rounded-3">
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon fas icon="globe fa-lg" />
                        <MDBCardText>
                          {user?.location
                            ? user?.location
                            : 'No location defined'}
                        </MDBCardText>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon
                          fab
                          icon="github fa-lg"
                          style={{ color: '#333333' }}
                        />
                        <a
                          href={user?.html_url}
                          target="_blank"
                          rel="noreferrer"
                          className="small text-link mb-0"
                        >
                          {user?.html_url}
                        </a>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon
                          fas
                          icon="building fa-lg"
                          style={{ color: '#333333' }}
                        />
                        <a
                          href={user?.organization_url}
                          target="_blank"
                          rel="noreferrer"
                          className="small text-link mb-0"
                        >
                          {user?.organization_url
                            ? user?.organization_url
                            : 'No organization defined'}
                        </a>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon
                          fab
                          icon="twitter fa-lg"
                          style={{ color: '#333333' }}
                        />
                        <a
                          href={user?.twitter_username}
                          target="_blank"
                          rel="noreferrer"
                          className="small text-link mb-0"
                        >
                          {user?.twitter_username
                            ? user?.twitter_username
                            : 'No twitter username defined'}
                        </a>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                        <MDBIcon fas icon="at" />
                        <MDBCardText>
                          {user?.email ? user?.email : 'N/A'}
                        </MDBCardText>
                      </MDBListGroupItem>
                    </MDBListGroup>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="8">
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Biography </MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {user?.bio ? user?.bio : 'No bio'}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Amount of Public Repositories</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {user?.public_repos ? user?.public_repos : 'N/A'}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>List of Public Repositories</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        {reposList?.name !== 'Error' &&
                          reposList?.map((repo) => (
                            <React.Fragment key={repo?.id}>
                              <div>
                                <a
                                  href={repo?.html_url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="link"
                                >
                                  {repo?.name}
                                </a>
                              </div>
                            </React.Fragment>
                          ))}
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Public Gists</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          {user?.public_gists ? user?.public_gists : 'N/A'}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          )}
        </MDBContainer>
      </section>
    );
  }
}
