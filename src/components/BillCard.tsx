import React from 'react';
import { Clock, FileText, IndianRupee, User } from 'lucide-react';
import { Bill } from '../types';
import { workflowStages } from '../data/workflow';
import { ProcessBillButton } from './ProcessBillButton';

interface BillCardProps {
  bill: Bill;
  onProcess: (billId: string) => void;
  userRole: string;
}

export function BillCard({ bill, onProcess, userRole }: BillCardProps) {
  const currentStage = workflowStages[bill.currentStage - 1];
  const daysLeft = Math.ceil((bill.dueDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
  const canProcess = currentStage.handler === userRole;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{bill.title}</h3>
          <p className="text-sm text-gray-600">ID: {bill.id}</p>
        </div>
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
          Stage {bill.currentStage}/7
        </span>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center text-gray-700">
          <IndianRupee className="w-5 h-5 mr-2" />
          <span>₹{bill.amount.toLocaleString()}</span>
        </div>
        
        <div className="flex items-center text-gray-700">
          <User className="w-5 h-5 mr-2" />
          <span>{currentStage.handler}</span>
        </div>
        
        <div className="flex items-center text-gray-700">
          <FileText className="w-5 h-5 mr-2" />
          <span>{currentStage.description}</span>
        </div>
        
        <div className="flex items-center text-gray-700">
          <Clock className="w-5 h-5 mr-2" />
          <span className={`${daysLeft < 2 ? 'text-red-600' : 'text-gray-700'}`}>
            {daysLeft} days remaining
          </span>
        </div>

        {canProcess && (
          <ProcessBillButton
            bill={bill}
            currentStage={currentStage}
            onProcess={onProcess}
          />
        )}
      </div>
    </div>
  );
}