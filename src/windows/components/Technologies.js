import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
} from 'mdb-react-ui-kit';

export default function ProfilePage() {
  return (
    <section
      className="pt-3"
      style={{
        backgroundColor: '#eee',
        top: '0',
        bottom: '0',
        right: '0',
        left: '0',
      }}
    >
      <MDBContainer className="py-2" style={{ height: '100%' }}>
        <MDBRow>
          <MDBCard className="mb-4">
            <MDBCardBody>
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>React</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">
                    Free and open-source front-end JavaScript library for
                    building user interfaces based on UI components.
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>ReactDOM </MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">
                    A package that provides DOM specific methods that can be
                    used at the top level of a web app to enable an efficient
                    way of managing DOM elements of the web page.
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>React Router</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">
                    fully-featured client and server-side routing library for
                    React, a JavaScript library for building user interfaces.
                    React Router runs anywhere React runs; on the web, on the
                    server with node.js, and on React Native.
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Redux</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">
                    Redux is a predictable state container designed to help you
                    write JavaScript apps that behave consistently across
                    client, server, and native environments, and are easy to
                    test.
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Redux Thunk </MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">
                    Redux Thunk is middleware that allows you to return
                    functions, rather than just actions, within Redux. This
                    allows for delayed actions, including working with promises.
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Bootstrap </MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">
                    The most popular CSS Framework for developing responsive and
                    mobile-first websites.
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Axios</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">
                    Promised-based HTTP client for JavaScript. It has the
                    ability to make HTTP requests from the browser and handle
                    the transformation of request and response data.
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>GitHub Search API</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">
                    The Search API helps you search for the specific item you
                    want to find. For example, you can find a user or a specific
                    file in a repository. Think of it the way you think of
                    performing a search on Google. It's designed to help you
                    find the one result you're looking for (or maybe the few
                    results you're looking for). Just like searching on Google,
                    you sometimes want to see a few pages of search results so
                    that you can find the item that best meets your needs.
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>GitHub Users API</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">
                    The Users API allows to get public and private information
                    about the authenticated user. It also allows to get public
                    information about any user.
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>GitHub OAuth API</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">
                    GitHub's OAuth implementation supports the standard
                    authorization code grant type and the OAuth 2.0 Device
                    Authorization Grant for apps that don't have access to a web
                    browser.
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
