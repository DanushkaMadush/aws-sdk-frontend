import React, { useState } from 'react';
import { createBucket } from '../../API/bucketApi';

function CreateBucket() {
  const [bucketName, setBucketName] = useState('');

  const handleCreate = async () => {
    await createBucket(bucketName);
    alert('Bucket Created!');
  };

  return (
    <div>
      <input type="text" className="form-control" onChange={(e) => setBucketName(e.target.value)} />
      <button className="btn btn-primary mt-2" onClick={handleCreate}>Create</button>
    </div>
  );
}

export default CreateBucket;
