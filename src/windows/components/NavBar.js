import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function NavBar({ user }) {
  const [showNavColor, setShowNavColor] = useState(false);

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
                {localStorage.getItem('accessToken') === null ? (
                  <NavLink
                    className="nav-link"
                    onClick={() => {
                      alert('Please log in');
                    }}
                  >
                    Profile
                  </NavLink>
                ) : (
                  <NavLink className="nav-link" to={`/profile`}>
                    Profile
                  </NavLink>
                )}
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink className="nav-link" to="/technologies">
                  Technologies
                </NavLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <NavLink
                  className="nav-link"
                  to={`/login`}
                  onClick={() => { localStorage.setItem('accessToken', ''); }}
                >
                  <MDBIcon className="fas fa-sign-out-alt" /> Logout
                </NavLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
