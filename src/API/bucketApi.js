const API_URL = 'http://localhost:5000/api/v1/buckets';

export const getBuckets = async () => {
  const response = await fetch(`${API_URL}/list`);
  return response.json();
};

export const createBucket = async (bucketName) => {
  await fetch(`${API_URL}/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ bucketName }),
  });
};

export const deleteBucket = async (bucketName) => {
  await fetch(`${API_URL}/delete`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ bucketName }),
  });
};
