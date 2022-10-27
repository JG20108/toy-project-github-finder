import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDetailAction } from '../redux/slices/githubFinderSlices';

const SearchBar = ({ onFormSubmit }) => {
  const [users, setUsers] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(users);
  };

  // Dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchReposAction(user));
    // dispatch(fetchUserDetailAction(user));
  }, [dispatch]);

  // Get the data
  const store = useSelector((state) => state?.repos);
  const { loading, reposList, profile, error } = store;

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
            onChange={(e) => setUsers(e.target.value)}
          />
        </InputGroup>
      </form>
      {/* 
      <div className="search-bar ui segment" style={{ paddingTop: '20px' }}>
        <form onSubmit={onSubmit} className="ui form">
          <div className="field">
            <label>User name: </label>
            <input
              style={{ width: '200px', marginLeft: '15px' }}
              type="text"
              value={term}
              onChange={(event) => setTerm(event.target.value)}
            />
          </div>
        </form>
      </div> */}
    </Container>
  );
};

export default SearchBar;
