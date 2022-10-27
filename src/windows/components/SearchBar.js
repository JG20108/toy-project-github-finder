import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/slices/githubUsers';

const SearchBar = ({ onFormSubmit }) => {
  const [users, setUsers] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(users);
  };

  // // Handle query change 
  // const [query, setQuery] = useState('');
  // const handleQueryInput = (event) => {
  //   const value = event.target.value;
  //   setQuery(value);
  // };


  // // Fetch the user details from the API using the query
  // const fetchUsers = async () => {
  //   try {
  //     const response = await axios.get('/search/users?q=' + query);
  //     console.log(response.data.items);

  //     const data = await axios.get('/search/users?q=' + query);
  //     return data?.items;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // Dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers(users));
  }, [dispatch, users]);

  // Get the data
  const store = useSelector((state) => state?.repos);
  const { loading, profiles, error } = store;

  // // Handle the input change event and update the state
  // const handleSearchUsers = async (e) => {
  //   e.preventDefault();
  //   if (users) {
  //     const items = await fetchUsers();
  //     setUsers(items);
  //   } else {
  //     console.log('No query');
  //   }
  // };

  return (
    <Container style={{ paddingTop: '2%' }}>
      <form onSubmit={onSubmit}>
        <InputGroup className="mb-3" style={{ width: '50%' }}>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={users}
            onChange={e=>setUsers(e.target.value)}
            type="text"
          /> {console.log(users)}
        </InputGroup>
      </form>
    </Container>
  );
};

export default SearchBar;
