import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './pages/Navbar.jsx';
import MemberList from './pages/MemberList.jsx';
import AddMember from './pages/AddMember.jsx';
import Payment from './pages/Payment.jsx';
import Summary from './pages/Summary.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Reports from './pages/Reports.jsx';
import AddFinger from './pages/AddFinger.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

function App() {
  const location = useLocation();
  const shouldShowNavbar = !['/login', '/register', '/', '/error'].includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/memberlist" element={
          <ProtectedRoute>
            <MemberList />
          </ProtectedRoute>
        } />
        <Route path="/add-member" element={
          <ProtectedRoute>
            <AddMember />
          </ProtectedRoute>
        } />
        <Route path="/payment" element={
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        } />
        <Route path="/summary" element={
          <ProtectedRoute>
            <Summary />
          </ProtectedRoute>
        } />
        <Route path="/reports" element={
          <ProtectedRoute>
            <Reports />
          </ProtectedRoute>
        } />
        <Route path="/add-finger" element={
          <ProtectedRoute>
            <AddFinger />
          </ProtectedRoute>
        } />
        {/* Catch-all route for 404 errors */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;