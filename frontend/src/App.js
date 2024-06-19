// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import UserProfile from './components/UserProfile';
import UserSettings from './components/UserSettings';
import About from './components/About';
import Contact from './components/Contact';

// A component to handle routes and show/hide the Navbar based on the current route
const RoutesWithNavbar = () => {
  const location = useLocation();
  const showNavbar = !['/login', '/register'].includes(location.pathname);

  return (
    <div>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/settings" element={<UserSettings />} />
        </Route>
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <RoutesWithNavbar />
    </Router>
  );
};

export default App;
