import React, { useState } from 'react';
import { deleteObject } from '../../API/objectApi';
import HomeButton from '../HomeButton';

function DeleteObject() {
  const [bucketName, setBucketName] = useState('');
  const [key, setKey] = useState('');

  const handleDelete = async () => {
    if (!bucketName || !key) {
      alert('Please enter bucket name and object key.');
      return;
    }

    await deleteObject(bucketName, key);
    alert('Object deleted successfully!');
  };

  return (
    <div>
      <h3>Delete Object</h3>
      <input type="text" className="form-control mb-2" placeholder="Enter bucket name" onChange={(e) => setBucketName(e.target.value)} />
      <input type="text" className="form-control mb-2" placeholder="Enter object key" onChange={(e) => setKey(e.target.value)} />
      <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      <HomeButton />
    </div>
  );
}

export default DeleteObject;
