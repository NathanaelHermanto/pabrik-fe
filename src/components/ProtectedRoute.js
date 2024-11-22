import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();
    // return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />; // Uncomment this line when commiting
    return <Outlet />; // for testing purposes
};

export default ProtectedRoute;
