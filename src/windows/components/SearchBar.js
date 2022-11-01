import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import { fetchUsers, fetchDefault } from '../../redux/slices/githubUsers';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  // Dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    if (debouncedTerm !== '') {
      dispatch(fetchUsers(debouncedTerm));
    } else {
      dispatch(fetchDefault('github'));
    }
    console.log(debouncedTerm);
  }, [dispatch, debouncedTerm]);

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
          />
        </InputGroup>
      </form>
    </Container>
  );
};

export default SearchBar;
