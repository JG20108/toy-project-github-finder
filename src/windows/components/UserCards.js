// eslint-disable-next-line no-unused-vars
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { useSearchParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

export default function UserCards({ user }) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
 
  if (searchParams && localStorage.getItem('accessToken') === '') {
    return (
      <Container style={{ paddingTop: '2%' }}>
        <h2 style={{ textAlign: 'center' }}>
          User Cards will be displayed here until the user has logged in
          correctly
        </h2>
      </Container>
    );
  } else {
    return (
      <MDBCol md="6" lg="4" xl="4" className="mt-3">
        <MDBCard style={{ borderRadius: '5%' }}>
          <MDBCardBody className="p-2">
            <div className="d-flex text-black">
              <MDBCardImage
                style={{ width: '35%', height: '35%', borderRadius: '35%' }}
                src={user?.avatar_url}
                alt=""
                fluid
              />
              <div className="flex-grow-1 ms-2">
                <MDBCardTitle className="medium">{user?.login}</MDBCardTitle>
                <a
                  href={user?.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="small text-link mb-0"
                >
                  {user?.html_url}
                </a>
                <br></br>
                <a
                  href={user?.organization_url}
                  target="_blank"
                  rel="noreferrer"
                  className="small text-link mb-0"
                >
                  {user?.organization_url
                    ? user?.organization_url
                    : 'No organization defined'}
                </a>
                <div className="d-flex pt-1">
                  <MDBBtn outline className="me-1 flex-grow-1" onClick={() => navigate(`/details/${user?.login}`)}>
                    Details
                  </MDBBtn>
                </div>
              </div>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  }
}
