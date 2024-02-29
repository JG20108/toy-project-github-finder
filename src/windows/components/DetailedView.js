import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
  fetchReposAction,
  fetchUserDetailAction,
} from '../../redux/slices/githubFinderSlices';
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
  MDBSpinner,
} from 'mdb-react-ui-kit';
import {
  followUser,
  checkFollowedUser,
  unfollowUser,
} from '../../redux/slices/githubUsers';

export default function DetailedView() {
  const { user } = useParams();
  const dispatch = useDispatch();
  const [userDetail, setUserDetail] = useState(user);
  const bearer = localStorage.getItem('accessToken');

  let response = '';

  function refreshPage() {
    window.location.reload(false);
  }

  const store = useSelector((state) => state.githubData);
  const { loading, reposList, profile, error } = store;

  let button;

  let [statusCode, setStatusCode] = useState(0);

  useEffect(() => {
    dispatch(fetchReposAction(userDetail));
    dispatch(fetchUserDetailAction(userDetail));

    dispatch(checkFollowedUser(userDetail)).then((response) => {
      setStatusCode(response.payload);
    });
  }, [dispatch, userDetail, setStatusCode]);


  if (statusCode === 404 || statusCode.status === 404) {
    button = (
      <MDBBtn
        className="flex-grow-1"
        onClick={() => {
          dispatch(followUser(userDetail)).then((response) => {
            setStatusCode(204);
          });
        }}
      >
        Follow
      </MDBBtn>
    );
  } else if (statusCode === 204 || statusCode.status === 204) {
    button = (
      <MDBBtn
        className="flex-grow-1"
        color="tertiary"
        onClick={() => {
          dispatch(unfollowUser(userDetail)).then((response) => {
            setStatusCode(404);
          });
        }}
      >
        Unfollow
      </MDBBtn>
    );
  }

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-3">
        {loading ? (
          <div className="text-center">
            <MDBSpinner
              color="primary"
              className="text-center"
              style={{ width: '32rem', height: '32rem' }}
            ></MDBSpinner>
            <h1>
              <strong className="justify-content-center">
                Loading Profile...
              </strong>
            </h1>
          </div>
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
                    {button}
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
                  <MDBListGroup className="rounded-3">
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
