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
      style={{margin: '0 auto'}}
      bgColor="light"
      className="text-center text-lg-start text-muted"
    >
      <section className="">
        <MDBContainer className="text-center text-md-start mt-2 pt-2">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon far icon="building" className="me-3" />
                Hello Iconic
              </h6>
              <p>
                The excellence we produce for you comes from the strength of our
                team. We are a dynamic, growing group of experienced
                professionals with diverse backgrounds and skillsets—coming
                together to produce digital products that drive your business
                forward.
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
              <p>
                <a
                  href="https://docs.google.com/document/d/1HKeYz7bV5B-ZhqErdIAUcyn6Ze0M9R0aR5HA9MPBbx0/edit?usp=sharing"
                  target="_blank"
                  className="text-reset"
                  rel="noreferrer"
                >
                  Project Requirements
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Los Angeles, US, 177 E Colorado Blvd. Pasadena, CA
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@helloiconic.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
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
          href="https://www.helloiconic.com"
          target="_blank"
          rel="noreferrer"
        >
          Hello Iconic
        </a>
      </div>
    </MDBFooter>
  );
}
