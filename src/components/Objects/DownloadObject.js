import React, { useState } from 'react';
import { downloadObject } from '../../API/objectApi';

function DownloadObject() {
  const [bucketName, setBucketName] = useState('');
  const [key, setKey] = useState('');

  const handleDownload = async () => {
    if (!bucketName || !key) {
      alert('Please enter bucket name and object key.');
      return;
    }

    const blob = await downloadObject(bucketName, key);
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = key;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <div>
      <h3>Download Object</h3>
      <input type="text" className="form-control mb-2" placeholder="Enter bucket name" onChange={(e) => setBucketName(e.target.value)} />
      <input type="text" className="form-control mb-2" placeholder="Enter object key" onChange={(e) => setKey(e.target.value)} />
      <button className="btn btn-warning" onClick={handleDownload}>Download</button>
    </div>
  );
}

export default DownloadObject;
