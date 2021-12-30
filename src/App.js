import React from 'react';
import SignInPage from './SignIn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<SignInPage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
