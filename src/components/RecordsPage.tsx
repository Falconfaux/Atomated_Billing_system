import React from 'react';
import { Bill } from '../types';
import { BillTimeline } from './BillTimeline';
import { BillsTable } from './BillsTable';
import { BillStats } from './BillStats';

interface RecordsPageProps {
  bills: Bill[];
}

export function RecordsPage({ bills }: RecordsPageProps) {
  const [selectedBill, setSelectedBill] = React.useState<Bill | null>(null);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Bill Records</h2>
      </div>

      <BillStats bills={bills} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <BillsTable 
            bills={bills} 
            onBillSelect={setSelectedBill}
            selectedBillId={selectedBill?.id}
          />
        </div>
        <div className="lg:col-span-1">
          {selectedBill ? (
            <BillTimeline bill={selectedBill} />
          ) : (
            <div className="bg-white p-6 rounded-lg shadow text-center text-gray-500">
              Select a bill to view its timeline
            </div>
          )}
        </div>
      </div>
    </div>
  );
}