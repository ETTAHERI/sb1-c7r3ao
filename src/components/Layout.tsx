import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { School, Users, BookOpen, Calculator, Database, Settings } from 'lucide-react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  if (isLoginPage) {
    return <>{children}</>;
  }

  const menuItems = [
    { icon: School, label: 'التسيير البيداغوجي', path: '/academic' },
    { icon: Users, label: 'إدارة الأساتذة', path: '/teachers' },
    { icon: BookOpen, label: 'إدارة الطلاب', path: '/students' },
    { icon: Calculator, label: 'الحسابات', path: '/finance' },
    { icon: Database, label: 'المخزون', path: '/inventory' },
    { icon: Settings, label: 'الإعدادات', path: '/settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar menuItems={menuItems} />
      <div className="flex-1">
        <Navbar />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}