import React from 'react';
import { Link } from 'react-router-dom';

function BucketOperations() {
  return (
    <div className="text-center">
      <h2>Bucket Operations</h2>
      <Link to="/view-buckets" className="btn btn-info m-2">View Bucket List</Link>
      <Link to="/create-bucket" className="btn btn-success m-2">Create Bucket</Link>
      <Link to="/delete-bucket" className="btn btn-danger m-2">Delete Bucket</Link>
    </div>
  );
}

export default BucketOperations;
