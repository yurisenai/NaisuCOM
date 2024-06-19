import React, { useState, useEffect } from 'react';
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
import useSendRequest from './hooks/useSendRequest'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('');
  const { sendRequest, response, error, loading } = useSendRequest();

  useEffect(() => {
    const checkLogin = async () => {
      await sendRequest('/check-login/', 'POST');
    };

    checkLogin();
  }, [sendRequest]);

  useEffect(() => {
    if (response) {
      setIsLoggedIn(response.isLoggedIn ===true);
      setUser(response.user);
    }
  }, [response]);

  return (
    <Router>
      <RoutesWithNavbar isLoggedIn={isLoggedIn} user={user} />
      <Routes>
        <Route path="/login" element={<Login onLogin={(user) => {setUser(user);setIsLoggedIn(true)}} />} />
      </Routes>
    </Router>
  );
};

const RoutesWithNavbar = ({ isLoggedIn , user}) => {
  const location = useLocation();
  const showNavbar = !['/login', '/register'].includes(location.pathname);

  return (
    <div>
      {showNavbar && <Navbar isLoggedIn={isLoggedIn} user={user} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route element={<ProtectedRoute  isLoggedIn={isLoggedIn} />}>
          <Route path="/profile" element={<UserProfile  isLoggedIn={isLoggedIn} user={user}/>} />
          <Route path="/settings" element={<UserSettings  user={user} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
