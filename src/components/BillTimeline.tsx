import React from 'react';
import { Bill } from '../types';
import { format } from 'date-fns';
import { CheckCircle2 } from 'lucide-react';

interface BillTimelineProps {
  bill: Bill;
}

export function BillTimeline({ bill }: BillTimelineProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Bill Timeline</h3>
      <div className="space-y-6">
        {bill.history.map((event, index) => (
          <div key={index} className="relative">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-8">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </div>
              <div className="ml-4 flex-1">
                <div className="font-medium">{event.action}</div>
                <div className="text-sm text-gray-500">by {event.handler}</div>
                <div className="text-sm text-gray-500">
                  {format(event.timestamp, 'MMM d, yyyy h:mm a')}
                </div>
              </div>
            </div>
            {index < bill.history.length - 1 && (
              <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}