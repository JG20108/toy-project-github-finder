import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Link } from 'react-router-dom';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBBtn,
} from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';

function NavBar() {
  const [rerender, setRerender] = useState(false);
  const [userData, setUserData] = useState({});

  const [showNavColor, setShowNavColor] = useState(false);
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const [showNavColorThird, setShowNavColorThird] = useState(false);

  // function loginWithGithub() {
  //   window.location.assign(
  //     'https://github.com/login/oauth/authorize?client_id=' + CLIENT_ID
  //   );
  // }

  // useEffect(() => {
  //   const queryString = window.location.search;
  //   const urlParams = new URLSearchParams(queryString);
  //   const codeParam = urlParams.get('code');
  //   console.log(codeParam);

  //   if (codeParam && localStorage.getItem('accessToken') === null) {
  //     async function getAccessToken() {
  //       await fetch('http://localhost:4000/getAccessToken?code=' + codeParam, {
  //         method: 'GET',
  //       })
  //         .then((response) => {
  //           return response.json();
  //         })
  //         .then((data) => {
  //           console.log('data', data);
  //           if (data.access_token) {
  //             localStorage.setItem('accessToken', data.access_token);
  //             setRerender(!rerender);
  //           }
  //         });
  //     }
  //     getAccessToken();
  //   }
  // }, []);

  // async function getUserData() {
  //   await fetch('http://localhost:4000/getUserData', {
  //     method: 'GET',
  //     headers: {
  //       Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
  //     },
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log('data', data);
  //       setUserData(data);
  //     });
  // }

  return (
    <>
      <MDBNavbar expand="lg" dark bgColor="primary">
        <MDBContainer fluid>
          <MDBNavbarBrand className="nav-link">GitHub Finder</MDBNavbarBrand>

          <MDBNavbarToggler
            type="button"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavColor(!showNavColor)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColor} navbar>
            <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink className="nav-link" to="/profile">
                  Profile
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink className="nav-link" to="/technologies">
                  Technologies
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink className="nav-link" to="/xd">
                  How to use
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink className="nav-link" to="/login">
                  Login with GitHub
                  <MDBIcon className="ps-2" fab icon="github-alt" size="x" />
                </NavLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            {/* {localStorage.getItem('accessToken') ? (
              <>
                <MDBBtn
                  rounded
                  className="text-blue"
                  color="light"
                  variant="outline-light"
                  onClick={() => {
                    localStorage.removeItem('accessToken');
                    setRerender(!rerender);
                  }}
                >
                  Log out
                </MDBBtn>
                <MDBBtn
                  rounded
                  className="text-blue"
                  color="light"
                  variant="outline-light"
                  // onClick={getUserData}
                >
                  Get Data
                </MDBBtn>
                {Object.keys(userData).length !== 0 ? (
                  <>
                    <h6 className="text-white" style={{ paddingLeft: '2%' }} on>
                      Logged in as: {userData.login}
                    </h6>
                  </>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <>
                <Link className="text-decoration-none text-white" to="/login">
                  <MDBBtn
                    className="mx-2"
                    tag="a"
                    color="light"
                    outline
                    floating
                  >
                    <MDBIcon fab icon="github-alt" size="2x" />
                  </MDBBtn>
                </Link>
                <h6 className="text-white" style={{ paddingLeft: '2%' }}>
                  GitHub Login
                </h6>
              </> 
            )} */}
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default NavBar;
