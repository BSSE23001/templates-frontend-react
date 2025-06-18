import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import HeaderNavigationBar from './components/headerbarNavigation.component';
import SidebarLayout from './layout/sidebar.layout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import EmployeePage from './pages/Employee';
import ProductsPage from './pages/Products';

import { AlertContextProvider } from './contexts/alert.context';
import AlertContextComponent from './components/alert.context.component';
import { ToastContextProvider } from './contexts/toast.context';
import ToastContextComponent from './components/toast.context.component';
import { ModalContextProvider } from './contexts/modal.context';
import ModalContextComponent from './components/modal.context.component';

const App = () => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  const handleLogin = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const ProtectedRoute = ({ element }) => {
    return user ? element : <Navigate to="/login" />;
  };

  return (
    <AlertContextProvider>
      <ToastContextProvider>
        <ModalContextProvider>
          <AlertContextComponent />
          <Router>
            <HeaderNavigationBar
              brand="Management System"
              onLogout={handleLogout}
              links={
                user
                  ? [{ to: '/dashboard', label: 'Dashboard' }]
                  : [
                      { to: '/login', label: 'Login' },
                      { to: '/signup', label: 'Signup' },
                    ]
              }
            />
            <Routes>
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/signup" element={<Signup onSignup={handleLogin} />} />

              {/* Protected layout */}
              <Route element={<SidebarLayout />}>
                <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
                <Route path="/employees" element={<ProtectedRoute element={<EmployeePage />} />} />
                <Route path="/products" element={<ProtectedRoute element={<ProductsPage />} />} />
              </Route>

              <Route path="*" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
            </Routes>
          </Router>
          <ModalContextComponent />
          <ToastContextComponent />
        </ModalContextProvider>
      </ToastContextProvider>
    </AlertContextProvider>
  );
};

export default App;
