import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

const TaskCompletionChart = ({ data }) => {
  const chartData = {
    labels: data.map((d) => d.department),
    datasets: [
      {
        label: 'Completion %',
        data: data.map((d) => d.completion),
        backgroundColor: '#00b5ad',
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default TaskCompletionChart;
