import { Link } from 'react-router-dom';
import {
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from 'mdb-react-ui-kit';

<<<<<<< HEAD
export default function UserCards({user}) {
=======
export default function UserCards() {
  const [user, setUser] = useState('JG20108');

  // Dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserDetailAction(user));
  }, [dispatch, user]);

  // Get the data
  const store = useSelector((state) => state?.repos);
  const { loading, profile, error } = store;
>>>>>>> 58edbd4c92827e1b9979f242dde77fe93f3f586f

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
                  <MDBBtn outline className="me-1 flex-grow-1">
                    {''}
                    <Link to="/details">Details</Link>
                  </MDBBtn>
                  <MDBBtn className="flex-grow-1">Follow</MDBBtn>
                </div>
              </div>
            </div>
          </MDBCardBody>
        </MDBCard>
    </MDBCol>
  );
}
