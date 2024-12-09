import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Bill, WorkflowStage } from '../types';

interface ProcessBillButtonProps {
  bill: Bill;
  currentStage: WorkflowStage;
  onProcess: (billId: string) => void;
}

export function ProcessBillButton({ bill, currentStage, onProcess }: ProcessBillButtonProps) {
  return (
    <button
      onClick={() => onProcess(bill.id)}
      className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
    >
      <span>Process to Next Stage</span>
      <ArrowRight className="w-4 h-4" />
    </button>
  );
}