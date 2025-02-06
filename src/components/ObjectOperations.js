import React from 'react';
import { Link } from 'react-router-dom';

function ObjectOperations() {
  return (
    <div className="text-center">
      <h2>Object Operations</h2>
      <Link to="/view-objects" className="btn btn-info m-2">View Object List</Link>
      <Link to="/upload-object" className="btn btn-info m-2">Upload Object</Link>
      <Link to="/download-object" className="btn btn-info m-2">Download Object</Link>
      <Link to="/delete-object" className="btn btn-info m-2">Delete Object</Link>
    </div>
  );
}

export default ObjectOperations;
