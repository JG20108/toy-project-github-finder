import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../../redux/slices/githubUsers';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    if (searchTerm !== '') dispatch(fetchUsers(searchTerm));
    console.log(searchTerm); 
  }, [dispatch, searchTerm]);

  return (
    <Container style={{ paddingTop: '2%' }}>
      <form>
        <InputGroup className="mb-3" style={{ width: '50%' }}>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
          />{' '}
        </InputGroup>
      </form>
    </Container>
  );
};

export default SearchBar;
