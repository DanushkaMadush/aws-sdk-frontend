import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bucket from './components/bucket.js';
import Object from './components/object.js';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h1 className="text-center">AWS S3 Manager</h1>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/buckets" className="btn btn-primary">Buckets</Link>
          <Link to="/objects" className="btn btn-secondary">Objects</Link>
        </div>
        <Routes>
          <Route path="/buckets" element={<Bucket />} />
          <Route path="/objects" element={<Object />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
