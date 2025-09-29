import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function WeightChart(){
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  useEffect(()=> {
    async function fetchData(){
      try {
        const token = localStorage.getItem('token');
        if (!token) return;
        const res = await axios.get(import.meta.env.VITE_API_URL + '/biometrics/weight', { headers: { Authorization: 'Bearer ' + token }});
        const dates = res.data.map(d => new Date(d.date).toLocaleDateString());
        const weights = res.data.map(d => d.value);
        setChartData({ labels: dates, datasets: [{ label: 'Weight (kg)', data: weights, tension:0.2 }]});
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      <h2>Weight Chart</h2>
      <Line data={chartData} />
    </div>
  );
}
