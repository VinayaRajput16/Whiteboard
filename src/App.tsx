import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import PrivateRoute from './PrivateRoute';
import Whiteboard from './components/Whiteboard';
import './App.css';
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
                <Route path="/whiteboard" element={<Whiteboard />} />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
