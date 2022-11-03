import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

export default function PrivateRoute({ children }) {
  const accessToken = localStorage.getItem('accessToken');
  const navigate = useNavigate();
  useEffect(() => {
    if (accessToken === '') {
      navigate('/login');
    }
  }, [accessToken, navigate]);

  return <>{accessToken === '' ? <Spinner></Spinner> : children}</>;
}
