import React from 'react';
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

export default function LoginScreen() {
  return (
    <Wrapper>
      {' '}
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="bg-dark text-white my-5 mx-auto"
              style={{ borderRadius: '1rem', maxWidth: '400px' }}
            >
              <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="fw-bold mb-2">GitHub Finder App</h2>
                <p className="text-white-50 mb-5">Please enter your username</p>

                <MDBInput
                  wrapperClass="mb-4 mx-5 w-100"
                  labelClass="text-white"
                  label="Username"
                  id="formWhite"
                  contrast
                  type="username"
                  size="lg"
                />

                <MDBBtn
                  outline
                  className="mx-2 px-5"
                  color="white"
                  size="lg"
                  onClick={() =>
                    window.open(
                      `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}`,
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
                    style={{ color: 'white' }}
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
