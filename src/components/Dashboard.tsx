import React from 'react';
import { Bill } from '../types';
import { BillCard } from './BillCard';
import { workflowStages } from '../data/workflow';
import { TaskHeader } from './TaskHeader';
import { CreateBillForm } from './CreateBillForm';

interface DashboardProps {
  bills: Bill[];
  userRole: string;
  onCreateBill?: (data: { title: string; amount: number }) => void;
  onProcessBill: (billId: string) => void;
}

export function Dashboard({ bills, userRole, onCreateBill, onProcessBill }: DashboardProps) {
  const userBills = bills.filter(bill => {
    const stage = workflowStages[bill.currentStage - 1];
    return stage.handler === userRole;
  });

  return (
    <div className="p-6">
      <TaskHeader />
      {userRole === 'Rashmi' && onCreateBill && (
        <div className="mb-6">
          <CreateBillForm onSubmit={onCreateBill} />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userBills.map(bill => (
          <BillCard 
            key={bill.id} 
            bill={bill} 
            onProcess={onProcessBill}
            userRole={userRole}
          />
        ))}
      </div>
    </div>
  );
}