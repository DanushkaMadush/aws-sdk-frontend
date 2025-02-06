const API_URL = 'http://localhost:5000/api/v1/objects';

export const getObjects = async (bucketName) => {
  const response = await fetch(`${API_URL}/list?bucketName=${bucketName}`);
  return response.json();
};

export const uploadObject = async (bucketName, file) => {
  const formData = new FormData();
  formData.append('bucketName', bucketName);
  formData.append('file', file);

  await fetch(`${API_URL}/upload`, {
    method: 'POST',
    body: formData,
  });
};

export const downloadObject = async (bucketName, key) => {
  const response = await fetch(`${API_URL}/download?bucketName=${bucketName}&key=${key}`);
  return response.blob();
};

export const deleteObject = async (bucketName, key) => {
  await fetch(`${API_URL}/delete`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ bucketName, key }),
  });
};
