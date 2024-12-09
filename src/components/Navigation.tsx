import React from 'react';
import { CircleUser, LayoutDashboard, FileText } from 'lucide-react';
import { User } from '../types';

interface NavigationProps {
  selectedUser: User;
  onUserChange: (userId: string) => void;
  users: User[];
  currentView: 'dashboard' | 'records';
  onViewChange: (view: 'dashboard' | 'records') => void;
}

export function Navigation({ 
  selectedUser, 
  onUserChange, 
  users,
  currentView,
  onViewChange 
}: NavigationProps) {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <CircleUser className="w-8 h-8 text-blue-600" />
            <span className="ml-2 text-xl font-semibold text-gray-800">
              Bill Processing System
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onViewChange('dashboard')}
              className={`flex items-center px-3 py-2 rounded-md ${
                currentView === 'dashboard'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <LayoutDashboard className="w-5 h-5 mr-2" />
              Dashboard
            </button>
            <button
              onClick={() => onViewChange('records')}
              className={`flex items-center px-3 py-2 rounded-md ${
                currentView === 'records'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-5 h-5 mr-2" />
              Records
            </button>
            <select
              value={selectedUser.id}
              onChange={(e) => onUserChange(e.target.value)}
              className="block w-48 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              {users.map(user => (
                <option key={user.id} value={user.id}>
                  {user.name} ({user.role})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}