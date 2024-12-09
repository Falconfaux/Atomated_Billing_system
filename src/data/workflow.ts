import { WorkflowStage } from '../types';

export const workflowStages: WorkflowStage[] = [
  {
    id: 1,
    name: 'Initial Receipt',
    handler: 'Rashmi',
    description: 'Initial bill receipt and forwarding',
    timeframe: 2
  },
  {
    id: 2,
    name: 'Record Forwarding',
    handler: 'Navnath',
    description: 'Forward to Store Keeper',
    timeframe: 1
  },
  {
    id: 3,
    name: 'Production Certification',
    handler: 'Mehraj',
    description: 'Certification with Production Engineers',
    timeframe: 7
  },
  {
    id: 4,
    name: 'Bill Approval',
    handler: 'Tshetty',
    description: 'Final bill approval',
    timeframe: 2
  },
  {
    id: 5,
    name: 'Recording',
    handler: 'Rashmi',
    description: 'Record approved bill',
    timeframe: 2
  },
  {
    id: 6,
    name: 'Storage',
    handler: 'Vishwas',
    description: 'Store and update bill details',
    timeframe: 2
  },
  {
    id: 7,
    name: 'Payment Processing',
    handler: 'System',
    description: 'Final payment processing',
    timeframe: 8
  }
];