import React, { useEffect, useState } from 'react';
import { getBuckets } from '../../API/bucketApi';
import HomeButton from '../HomeButton';

function ViewBuckets() {
  const [buckets, setBuckets] = useState([]);

  useEffect(() => {
    async function fetchBuckets() {
      const data = await getBuckets();
      setBuckets(data.buckets || []);
    }
    fetchBuckets();
  }, []);

  return (
    <div>
      <h3>Bucket List</h3>
      <ul className="list-group">
        {buckets.map((bucket) => <li key={bucket} className="list-group-item">{bucket}</li>)}
      </ul>
      <HomeButton />
    </div>
  );
}

export default ViewBuckets;
