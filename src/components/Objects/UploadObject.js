import React, { useState } from 'react';
import { uploadObject } from '../../API/objectApi';
import HomeButton from '../HomeButton';

function UploadObject() {
  const [bucketName, setBucketName] = useState('');
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!bucketName || !file) {
      alert('Please enter a bucket name and select a file.');
      return;
    }

    await uploadObject(bucketName, file);
    alert('File uploaded successfully!');
  };

  return (
    <div>
      <h3>Upload Object</h3>
      <input type="text" className="form-control mb-2" placeholder="Enter bucket name" onChange={(e) => setBucketName(e.target.value)} />
      <input type="file" className="form-control mb-2" onChange={(e) => setFile(e.target.files[0])} />
      <button className="btn btn-success" onClick={handleUpload}>Upload</button>
      <HomeButton />
    </div>
  );
}

export default UploadObject;
