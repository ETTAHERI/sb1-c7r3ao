import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { School, Users, BookOpen, Calculator, Database, Settings } from 'lucide-react-native';
import { AcademicScreen } from '../screens/AcademicScreen';
import { TeachersScreen } from '../screens/TeachersScreen';
import { StudentsScreen } from '../screens/StudentsScreen';
import { FinanceScreen } from '../screens/FinanceScreen';
import { InventoryScreen } from '../screens/InventoryScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { paddingBottom: 5 },
        tabBarActiveTintColor: '#4f46e5',
      }}
    >
      <Tab.Screen
        name="Academic"
        component={AcademicScreen}
        options={{
          title: 'التسيير البيداغوجي',
          tabBarIcon: ({ color }) => <School size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Teachers"
        component={TeachersScreen}
        options={{
          title: 'الأساتذة',
          tabBarIcon: ({ color }) => <Users size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Students"
        component={StudentsScreen}
        options={{
          title: 'الطلاب',
          tabBarIcon: ({ color }) => <BookOpen size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Finance"
        component={FinanceScreen}
        options={{
          title: 'الحسابات',
          tabBarIcon: ({ color }) => <Calculator size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Inventory"
        component={InventoryScreen}
        options={{
          title: 'المخزون',
          tabBarIcon: ({ color }) => <Database size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'الإعدادات',
          tabBarIcon: ({ color }) => <Settings size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};