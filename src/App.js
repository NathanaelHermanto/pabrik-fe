import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Login from './pages/Login';
import { useLocation } from 'react-router-dom';
import Paddy from './pages/Paddy';
import Batch from './pages/Batch';
import Rice from './pages/Rice';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
    const location = useLocation(); 
    const hideSidebarRoutes = ['/login']; 

    return (
      <AuthProvider>

            <div style={{ display: 'flex', height: '100vh' }}>
                {!hideSidebarRoutes.includes(location.pathname) && <Sidebar />}

                <div
                    style={{
                        flex: 1,
                        overflow: 'auto',
                        padding: '16px',
                        transition: 'margin-left 0.3s ease',
                    }}
                >
                    <Routes>
                        {/* Public */}
                        <Route path="/login" element={<Login />} />

                        {/* Protected */}
                        <Route element={<ProtectedRoute/>} >  
                          <Route path="/dashboard" element={<Dashboard />} />
                          <Route path="/inventory" element={<Inventory />} />
                          <Route path="/inventory/paddy" element={<Paddy />} />
                          <Route path="/inventory/batch" element={<Batch />} />
                          <Route path="/inventory/rice" element={<Rice />} />
                        </Route>

                        {/* Fallback Route */}
                        <Route path="*" element={<Navigate to="/login" replace />} />

                    </Routes>
                </div>
            </div>
        </AuthProvider>
    );
};

export default App;
