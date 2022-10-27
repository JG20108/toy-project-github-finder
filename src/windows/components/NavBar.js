import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';

// const CLIENT_ID = '88ef676a79a192c55463';

function NavBar() {
  const [rerender, setRerender] = useState(false);
  const [userData, setUserData] = useState({});

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
    <Navbar bg="primary" variant="dark" expand="lg" style={{ width: '100%' }}>
      <Container>
        <Navbar.Brand>
          GitHub Finder
          <a
            href="https://www.helloiconic.com/"
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: '8px', color: 'white', paddingLeft: '5%' }}
          >
            {' '}
            by Hello Iconic
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              {''}
              <Link className="text-decoration-none text-white" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              {''}
              <Link className="text-decoration-none text-white" to="/profile">
                Profile
              </Link>
            </Nav.Link>
            <NavDropdown title="Information" id="basic-nav-dropdown">
              <NavDropdown.Item>How to use</NavDropdown.Item>
              <NavDropdown.Item>
                {''}
                <Link className="text-decoration-none" to="/technologies">
                  Technologies
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://docs.github.com/en/rest/search#search-users"
                target="_blank"
              >
                GitHub Search api resources
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="https://docs.google.com/document/d/1HKeYz7bV5B-ZhqErdIAUcyn6Ze0M9R0aR5HA9MPBbx0/edit"
                target="_blank"
              >
                Link to requirements
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          {localStorage.getItem('accessToken') ? (
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
              <MDBBtn
                className="mx-2"
                tag="a"
                color="light"
                onClick={async () => {
                  // await loginWithGithub();
                  // await getUserData();
                }}
                outline
                floating
              >
                <MDBIcon fab icon="github-alt" size="2x" />
              </MDBBtn>
              <h6 className="text-white" style={{ paddingLeft: '2%' }}>
                GitHub Login
              </h6>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
