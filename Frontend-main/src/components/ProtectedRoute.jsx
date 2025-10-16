import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const location = useLocation();
  
  // ตรวจสอบว่ามี token หรือไม่
  if (!token) {
    // ถ้าไม่มี token ให้ redirect ไปหน้า login พร้อมเก็บ path ปัจจุบัน
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ถ้ามี token ให้แสดงหน้าที่ต้องการ
  return children;
};

export default ProtectedRoute;