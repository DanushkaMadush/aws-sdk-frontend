import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomeButton() {
  const navigate = useNavigate();

  return (
    <div className='home-button-container'>
    <button className="btn btn-primary mt-3" onClick={() => navigate('/')}>
      Home
    </button>
    </div>
  );
}

export default HomeButton;
