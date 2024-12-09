import React from 'react';
import { Bill } from '../types';
import { Clock, CheckCircle, AlertCircle, IndianRupee } from 'lucide-react';

interface BillStatsProps {
  bills: Bill[];
}

export function BillStats({ bills }: BillStatsProps) {
  const totalBills = bills.length;
  const completedBills = bills.filter(bill => bill.status === 'completed').length;
  const pendingBills = totalBills - completedBills;
  const totalAmount = bills.reduce((sum, bill) => sum + bill.amount, 0);

  const stats = [
    {
      label: 'Total Bills',
      value: totalBills,
      icon: Clock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      label: 'Completed',
      value: completedBills,
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      label: 'Pending',
      value: pendingBills,
      icon: AlertCircle,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
    },
    {
      label: 'Total Amount',
      value: `₹${totalAmount.toLocaleString()}`,
      icon: IndianRupee,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className={`${stat.bgColor} p-3 rounded-full`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">{stat.label}</p>
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}