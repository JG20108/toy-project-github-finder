import { NavLink } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authAction } from '../../redux/slices/githubAuth';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBBtn,
} from 'mdb-react-ui-kit';

function NavBar() {
  const [userDetail, setUserDetail] = useState();

  // // Dispatch
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(authAction());
  // }, [dispatch ]);

  const [showNavColor, setShowNavColor] = useState(false);

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
                <MDBBtn
                  floating
                  size=""
                  tag="a"
                  className="ms-3"
                  onClick={() =>
                    window.open(
                      `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}`,
                      '_self'
                    )
                  }
                >
                  <MDBIcon size='2x' fab icon="github-alt" />
                </MDBBtn>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default NavBar;
