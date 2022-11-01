import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
  fetchReposAction,
  fetchUserDetailAction,
} from '../../redux/slices/githubFinderSlices';
import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from 'mdb-react-ui-kit';

export default function DetailedView() {
  const {user} = useParams();
  const [userDetail, setUserDetail] = useState(user);

  // Dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReposAction(userDetail));
    dispatch(fetchUserDetailAction(userDetail));
  }, [dispatch, userDetail]);

  // Get the data
  const store = useSelector((state) => state?.repos);
  const { loading, reposList, profile, error } = store;

  return (
    <section style={{ backgroundColor: '#eee', height:'100%'}}>
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
                    src={profile?.avatar_url}
                    alt=""
                    className="rounded-circle"
                    style={{ width: '150px' }}
                    fluid
                  />
                  <p className="text-muted mb-1"> ID: {profile?.id} </p>
                  <p className="text-muted mb-1">
                    {' '}
                    Full Name: {profile?.name}{' '}
                  </p>
                  <p className="text-muted mb-4"> Username: {profile?.login}</p>
                  <div className="d-flex justify-content-center mb-2">
                    <MDBBtn>Follow</MDBBtn>
                  </div>
                  <p className="text-muted mb-4">
                    {' '}
                    Followers: {profile?.followers}
                  </p>
                  <p className="text-muted mb-4">
                    {' '}
                    Following: {profile?.following}
                  </p>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="p-0">
                  <MDBListGroup flush className="rounded-3">
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fas icon="globe fa-lg" />
                      <MDBCardText>
                        {profile?.location
                          ? profile?.location
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
                        href={profile?.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="small text-link mb-0"
                      >
                        {profile?.html_url}
                      </a>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fas
                        icon="building fa-lg"
                        style={{ color: '#333333' }}
                      />
                      <a
                        href={profile?.organization_url}
                        target="_blank"
                        rel="noreferrer"
                        className="small text-link mb-0"
                      >
                        {profile?.organization_url
                          ? profile?.organization_url
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
                        href={profile?.twitter_username}
                        target="_blank"
                        rel="noreferrer"
                        className="small text-link mb-0"
                      >
                        {profile?.twitter_username
                          ? profile?.twitter_username
                          : 'No twitter username defined'}
                      </a>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fas icon="at" />
                      <MDBCardText>
                        {profile?.email ? profile?.email : 'N/A'}
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
                        {profile?.bio ? profile?.bio : 'No bio'}
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
                        {profile?.public_repos ? profile?.public_repos : 'N/A'}
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
                          <>
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
                          </>
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
                        {profile?.public_gists ? profile?.public_gists : 'N/A'}
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
