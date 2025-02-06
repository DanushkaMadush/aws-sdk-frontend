import React, { useState } from 'react';
import { getObjects } from '../../API/objectApi';
import HomeButton from '../HomeButton';

function ViewObjects() {
  const [bucketName, setBucketName] = useState('');
  const [objects, setObjects] = useState([]);

  const fetchObjects = async () => {
    const data = await getObjects(bucketName);
    setObjects(data);
  };

  return (
    <div>
      <h3>View Objects</h3>
      <input type="text" className="form-control mb-2" placeholder="Enter bucket name" onChange={(e) => setBucketName(e.target.value)} />
      <button className="btn btn-info" onClick={fetchObjects}>Fetch Objects</button>

      <ul className="list-group mt-3">
        {objects.length > 0 ? objects.map((obj) => (
          <li key={obj.key} className="list-group-item">
            {obj.key} ({obj.size} bytes)
          </li>
        )) : <p>No objects found.</p>}
      </ul>
      <HomeButton />
    </div>
  );
}

export default ViewObjects;
