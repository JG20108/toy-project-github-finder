import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from 'mdb-react-ui-kit';

export default function ProfilePage() {
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-2">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid
                />
                <p className="text-muted mb-1">Angel Bulnes</p>
                <p className="text-muted mb-4">abulnes16</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Follow</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText>Location</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="github fa-lg"
                      style={{ color: '#333333' }}
                    />
                    <a
                      href="https://github.com/abulnes16"
                      target="_blank"
                      rel="noreferrer"
                      className="small text-link mb-0"
                    >
                      https://github.com/abulnes16
                    </a>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon far icon="envelope" />
                    <MDBCardText>Email</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      Angel Bulnes
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Public Repositories: </MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">40</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Biography</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec pulvinar mollis nisi quis venenatis. Pellentesque
                      habitant morbi tristique senectus et netus et malesuada
                      fames ac turpis egestas. Morbi vitae elit purus. Donec
                      tincidunt velit magna, id lobortis libero pharetra non.
                      Aenean ante nisi, laoreet vitae ligula at, elementum
                      aliquet metus. Nulla justo elit, ullamcorper vel ligula
                      id, vehicula volutpat quam. Aliquam vel rhoncus risus.
                      Nullam hendrerit neque non augue gravida, nec semper lorem
                      dignissim. Phasellus sit amet congue enim. Fusce sit amet
                      tellus nec massa consectetur ultrices. Etiam odio nulla,
                      tincidunt non ipsum non, tempus finibus nisi. Nullam
                      pulvinar gravida auctor. Pellentesque porttitor nulla et
                      neque finibus finibus.
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
