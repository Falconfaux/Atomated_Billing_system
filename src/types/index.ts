export interface User {
  id: string;
  name: string;
  role: string;
  timeframe: number; // days to complete task
}

export interface Bill {
  id: string;
  title: string;
  amount: number;
  currentStage: number;
  status: 'pending' | 'completed';
  history: {
    stage: number;
    handler: string;
    action: string;
    timestamp: Date;
  }[];
  createdAt: Date;
  dueDate: Date;
}

export interface WorkflowStage {
  id: number;
  name: string;
  handler: string;
  description: string;
  timeframe: number;
}