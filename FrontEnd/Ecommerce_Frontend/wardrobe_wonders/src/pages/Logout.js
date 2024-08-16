import React from 'react';
import { useNavigate, useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate.push('/login');
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;