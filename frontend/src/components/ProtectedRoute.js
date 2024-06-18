import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const token = localStorage.getItem('token'); // or use context if you're using React Context API
    return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
