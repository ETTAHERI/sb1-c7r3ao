import React from 'react';
import { Users, GraduationCap, BookOpen, DollarSign, BarChart3 } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: string;
  trendValue?: string;
}

const StatCard = ({ title, value, icon, trend, trendValue }: StatCardProps) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600 mb-1">{title}</p>
        <h3 className="text-2xl font-semibold">{value}</h3>
        {trend && (
          <p className={`text-sm mt-2 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {trend === 'up' ? '↑' : '↓'} {trendValue}
          </p>
        )}
      </div>
      <div className="p-3 bg-indigo-100 rounded-full">
        {icon}
      </div>
    </div>
  </div>
);

export const Dashboard = () => {
  const stats = [
    {
      title: 'إجمالي الطلاب',
      value: '1,234',
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      trend: 'up',
      trendValue: '12% من الشهر الماضي'
    },
    {
      title: 'إجمالي الأساتذة',
      value: '85',
      icon: <GraduationCap className="h-6 w-6 text-indigo-600" />,
    },
    {
      title: 'الفصول الدراسية',
      value: '32',
      icon: <BookOpen className="h-6 w-6 text-indigo-600" />,
    },
    {
      title: 'الإيرادات الشهرية',
      value: '75,000 درهم',
      icon: <DollarSign className="h-6 w-6 text-indigo-600" />,
      trend: 'up',
      trendValue: '8% من الشهر الماضي'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">لوحة التحكم</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          تقرير جديد
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">نشاط الطلاب</h3>
            <BarChart3 className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-64 flex items-center justify-center text-gray-500">
            مخطط النشاط هنا
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">المهام القادمة</h3>
          <div className="space-y-4">
            {[
              'اجتماع مجلس المدرسة - 15:00',
              'موعد تسليم التقارير الشهرية',
              'ورشة عمل للمعلمين - الخميس',
              'اختبارات نهاية الفصل'
            ].map((task, index) => (
              <div key={index} className="flex items-center space-x-3">
                <input type="checkbox" className="h-4 w-4 text-indigo-600 rounded" />
                <span className="text-gray-700">{task}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};