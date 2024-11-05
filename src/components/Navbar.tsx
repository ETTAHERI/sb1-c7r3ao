import React from 'react';
import { Bell, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">نظام إدارة المدارس</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell className="h-5 w-5 text-gray-600" />
            </button>
            
            <div className="relative">
              <button className="flex items-center space-x-3 p-2 rounded-full hover:bg-gray-100">
                <span className="text-sm font-medium text-gray-700">{user?.name}</span>
                <User className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            
            <button 
              onClick={logout}
              className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100"
            >
              <LogOut className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};