import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Navigation } from './components/Navigation';
import { RecordsPage } from './components/RecordsPage';
import { users } from './data/users';
import { Bill } from './types';
import { workflowStages } from './data/workflow';

function App() {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [bills, setBills] = useState<Bill[]>([]);
  const [currentView, setCurrentView] = useState<'dashboard' | 'records'>('dashboard');

  const handleUserChange = (userId: string) => {
    setSelectedUser(users.find(u => u.id === userId) || users[0]);
  };

  const handleCreateBill = (data: { title: string; amount: number }) => {
    const newBill: Bill = {
      id: `BILL-${String(bills.length + 1).padStart(3, '0')}`,
      title: data.title,
      amount: data.amount,
      currentStage: 1,
      status: 'pending',
      history: [{
        stage: 1,
        handler: 'Rashmi',
        action: 'Created',
        timestamp: new Date()
      }],
      createdAt: new Date(),
      dueDate: new Date(Date.now() + 24 * 60 * 60 * 1000 * workflowStages[0].timeframe)
    };

    setBills(prev => [...prev, newBill]);
  };

  const handleProcessBill = (billId: string) => {
    setBills(prev => prev.map(bill => {
      if (bill.id === billId) {
        const nextStage = bill.currentStage + 1;
        const stage = workflowStages[nextStage - 1];
        
        return {
          ...bill,
          currentStage: nextStage,
          status: nextStage === workflowStages.length ? 'completed' : 'pending',
          history: [
            ...bill.history,
            {
              stage: nextStage,
              handler: selectedUser.name,
              action: 'Processed',
              timestamp: new Date()
            }
          ],
          dueDate: new Date(Date.now() + 24 * 60 * 60 * 1000 * stage.timeframe)
        };
      }
      return bill;
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation 
        selectedUser={selectedUser}
        onUserChange={handleUserChange}
        users={users}
        currentView={currentView}
        onViewChange={setCurrentView}
      />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {currentView === 'dashboard' ? (
          <Dashboard 
            bills={bills} 
            userRole={selectedUser.name}
            onCreateBill={selectedUser.name === 'Rashmi' ? handleCreateBill : undefined}
            onProcessBill={handleProcessBill}
          />
        ) : (
          <RecordsPage bills={bills} />
        )}
      </main>
    </div>
  );
}

export default App;