import React from 'react';

function Bucket() {
  return (
    <div className="mt-4">
      <h2>Bucket Operations</h2>
      <button className="btn btn-info m-2">View Bucket List</button>
      <button className="btn btn-success m-2">Create Bucket</button>
      <button className="btn btn-danger m-2">Delete Bucket</button>
    </div>
  );
}

export default Bucket;
