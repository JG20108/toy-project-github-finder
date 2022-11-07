import React, { useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from 'mdb-react-ui-kit';
import styled from 'styled-components';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginScreen() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  // eslint-disable-next-line no-unused-vars
  const [accessToken, setAccessToken] = useState([]);
  const githubCode = searchParams.get('code');

  // .env data
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const client_secret = process.env.REACT_APP_CLIENT_SECRET;
  const redirect_uri = process.env.REACT_APP_REDIRECT_URI;

  // Assign username
  const [login, setLogin] = useState('');
  const handleChange = (event) => {
    setLogin(event.target.value);
  };

  useEffect(() => {
    if (githubCode) {
      axios(
        `https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${githubCode}&redirect_uri=${redirect_uri}&scope=user:follow`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
          },
        }
      )
        .then((response) => response.data)
        .then((responseData) => {
          setAccessToken(responseData.access_token);
          if (responseData.access_token) {
            localStorage.setItem('accessToken', responseData.access_token);
            navigate('/');
          }
          console.log(responseData);
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubCode]);

  return (
    <Wrapper>
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="bg-white my-5 mx-auto"
              style={{ borderRadius: '1rem', maxWidth: '400px' }}
            >
              <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="fw-bold mb-2">GitHub Finder App</h2>
                <p className=" mb-5">Please enter your username</p>

                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  label="Username"
                  id="formControlLg"
                  type="username"
                  size="lg"
                  value={login}
                  onChange={handleChange}
                />

                <MDBBtn
                  outline
                  className="mx-2 px-5"
                  size="lg"
                  onClick={() =>
                    window.open(
                      `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&login=${login}&scope=user:follow`,
                      '_self'
                    )
                  }
                >
                  Login
                </MDBBtn>

                <div className="d-flex flex-row mt-3 mb-0">
                  <MDBIcon
                    className="m-3 mb-0"
                    fab
                    icon="github-alt"
                    size="3x"
                    style={{ color: 'blue' }}
                  />
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 100vh;
  background: #6a11cb;
  background: -webkit-linear-gradient(
    to right,
    rgba(106, 17, 203, 1),
    rgba(37, 117, 252, 1)
  );
  background: linear-gradient(
    to right,
    rgba(106, 17, 203, 1),
    rgba(37, 117, 252, 1)
  );
`;
