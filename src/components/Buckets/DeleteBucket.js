import React, { useState } from 'react';
import { deleteBucket } from '../../API/bucketApi';
import Home from '../Home';
import HomeButton from '../HomeButton';

function DeleteBucket() {
  const [bucketName, setBucketName] = useState('');

  const handleDelete = async () => {
    await deleteBucket(bucketName);
    alert('Bucket Deleted!');
  };

  return (
    <div>
      <input type="text" className="form-control" onChange={(e) => setBucketName(e.target.value)} />
      <button className="btn btn-danger mt-2" onClick={handleDelete}>Delete</button>
      <HomeButton />
    </div>
  );
}

export default DeleteBucket;
