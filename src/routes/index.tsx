import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';
import { Academic } from '../pages/Academic';
import { Teachers } from '../pages/Teachers';
import { Students } from '../pages/Students';
import { Finance } from '../pages/Finance';
import { Inventory } from '../pages/Inventory';
import { Settings } from '../pages/Settings';
import { ProtectedRoute } from './ProtectedRoute';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/academic/*" element={<Academic />} />
        <Route path="/teachers/*" element={<Teachers />} />
        <Route path="/students/*" element={<Students />} />
        <Route path="/finance/*" element={<Finance />} />
        <Route path="/inventory/*" element={<Inventory />} />
        <Route path="/settings/*" element={<Settings />} />
      </Route>
      
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};