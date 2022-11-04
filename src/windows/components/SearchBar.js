import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import { setDebouncedTerm } from '../../redux/slices/githubUsers';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const timerId = setTimeout(() => {
      dispatch(setDebouncedTerm(searchTerm));
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
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
          />
        </InputGroup>
      </form>
    </Container>
  );
};
export default SearchBar;
