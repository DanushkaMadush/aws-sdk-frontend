import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center">
      <h2>Welcome to AWS S3 Manager</h2>
      <Link to="/bucket-operations" className="btn btn-primary m-3">Bucket Operations</Link>
      <Link to="/object-operations" className="btn btn-secondary m-3">Object Operations</Link>
    </div>
  );
}

export default Home;
