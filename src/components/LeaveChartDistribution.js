import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
  Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Legend, Tooltip);

const LeaveDistributionChart = ({ leaveRequests }) => {
  const leaveTypes = ['Annual Leave', 'Sick Leave', 'Personal Leave', 'Maternity Leave', 'Emergency Leave'];

  const typeStatusCount = leaveTypes.reduce((acc, type) => {
    acc[type] = { Approved: 0, Pending: 0, Rejected: 0 };
    return acc;
  }, {});

  leaveRequests.forEach(({ type, status }) => {
    if (!typeStatusCount[type]) {
      typeStatusCount[type] = { Approved: 0, Pending: 0, Rejected: 0 };
    }
    if (typeStatusCount[type][status] !== undefined) {
      typeStatusCount[type][status]++;
    }
  });

  const labels = Object.keys(typeStatusCount);
  const approvedData = labels.map(type => typeStatusCount[type].Approved);
  const pendingData = labels.map(type => typeStatusCount[type].Pending);
  const rejectedData = labels.map(type => typeStatusCount[type].Rejected);

  const data = {
    labels,
    datasets: [
      {
        label: 'Approved',
        data: approvedData,
        backgroundColor: '#34d399', 
      },
      {
        label: 'Pending',
        data: pendingData,
        backgroundColor: '#fbbf24', 
      },
      {
        label: 'Rejected',
        data: rejectedData,
        backgroundColor: '#f87171', 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default LeaveDistributionChart;
