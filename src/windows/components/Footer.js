import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter
      style={{
        marginTop: '15%',
      }}
      bgColor="light"
      className="text-center text-lg-start text-muted"
    >
      <section className="">
        <MDBContainer className="text-center text-md-start mt-2 pt-2">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon fab icon="github-alt" className="me-2"/>
                Tool details
              </h6>
              <p>
              This GitHub User Finder is designed to streamline the process of discovering GitHub users. 
              It enables users to easily search, follow, and unfollow GitHub profiles, enhancing the way developers connect and interact within the GitHub community. 
              This tool aims to simplify navigation through GitHub's vast user base, making it more accessible for everyone to find and engage with the developers they are interested in.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful Links</h6>
              <p>
                <a
                  href="https://docs.github.com/en/rest/search#search-users"
                  target="_blank"
                  className="text-reset"
                  rel="noreferrer"
                >
                  GitHub Search API
                </a>
              </p>
              <p>
                <a
                  href="https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps#web-application-flow"
                  target="_blank"
                  className="text-reset"
                  rel="noreferrer"
                >
                  GitHub Oauth API
                </a>
              </p>
              <p>
                <a
                  href="https://docs.github.com/en/rest/reference/users"
                  target="_blank"
                  className="text-reset"
                  rel="noreferrer"
                >
                  GitHub Users API
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/JG20108/toy-project-github-finder.git"
                  target="_blank"
                  className="text-reset"
                  rel="noreferrer"
                >
                  GitHub Repository
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Tegucigalpa, Honduras 11101
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                joseosgui@hotmail.com
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        Developed by: 
        <a
          className="text-reset fw-bold"
          href="https://portfolio-theta-gold-13.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Jose Guillen
        </a>
      </div>
    </MDBFooter>
  );
}
