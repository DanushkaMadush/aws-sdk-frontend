import React, { useEffect, useState } from 'react';
import { getBuckets } from '../../API/bucketApi';
import HomeButton from '../HomeButton';

function ViewBuckets() {
  const [buckets, setBuckets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBuckets() {
      try {
        const data = await getBuckets();
        console.log("API Response:", data); // Debugging log

        if (data?.buckets && Array.isArray(data.buckets)) {
          setBuckets(data.buckets); // Correctly extract the buckets array
        } else {
          setError('Invalid response from server');
        }
      } catch (err) {
        console.error('Error fetching buckets:', err);
        setError('Failed to fetch bucket list');
      }
    }
    fetchBuckets();
  }, []);

  return (
    <div className="container mt-4">
      <h3>Bucket List</h3>
      {error && <p className="text-danger">{error}</p>}
      {buckets.length === 0 && !error ? (
        <p>Loading...</p>
      ) : (
        <ul className="list-group">
          {buckets.map((bucket, index) => (
            <li key={index} className="list-group-item">
              <strong>Name:</strong> {bucket.Name} <br />
              <strong>Created On:</strong> {new Date(bucket.CreationDate).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
      <HomeButton />
    </div>
  );
}

export default ViewBuckets;
