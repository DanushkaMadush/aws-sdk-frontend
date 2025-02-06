import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import BucketOperations from './components/BucketOperations';
import ObjectOperations from './components/ObjectOperations';
import ViewBuckets from './components/Buckets/ViewBuckets';
import CreateBucket from './components/Buckets/CreateBucket';
import DeleteBucket from './components/Buckets/DeleteBucket';
import ViewObjects from './components/Objects/ViewObjects';
import UploadObject from './components/Objects/UploadObject';
import DownloadObject from './components/Objects/DownloadObject';
import DeleteObject from './components/Objects/DeleteObject';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bucket-operations" element={<BucketOperations />} />
          <Route path="/object-operations" element={<ObjectOperations />} />
          <Route path="/view-buckets" element={<ViewBuckets />} />
          <Route path="/create-bucket" element={<CreateBucket />} />
          <Route path="/delete-bucket" element={<DeleteBucket />} />
          <Route path="/view-objects" element={<ViewObjects />} />
          <Route path="/upload-object" element={<UploadObject />} />
          <Route path="/download-object" element={<DownloadObject />} />
          <Route path="/delete-object" element={<DeleteObject />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
