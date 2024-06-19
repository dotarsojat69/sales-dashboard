import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';

const SalesChart = ({ sales }) => {
  const lineData = sales.reduce((acc, sale) => {
    const existingIndex = acc.findIndex(item => item.date === sale.date);
    if (existingIndex !== -1) {
      acc[existingIndex].sales += sale.sales;
      acc[existingIndex].revenue += sale.revenue;
    } else {
      acc.push({ ...sale });
    }
    return acc;
  }, []);

  const barData = sales.reduce((acc, sale) => {
    const existingIndex = acc.findIndex(item => item.product === sale.product);
    if (existingIndex !== -1) {
      acc[existingIndex].sales += sale.sales;
      acc[existingIndex].revenue += sale.revenue;
    } else {
      acc.push({ ...sale });
    }
    return acc;
  }, []);

  return (
    <div className="grid items-center justify-center xl:flex gap-20">
      <div>
        <h3 className="text-xl font-semibold mb-4 xl:ml-0 ml-20">Daily Sales Trend</h3>
        <LineChart width={400} height={300} data={lineData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" />
        </LineChart>

      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4 xl:ml-0 ml-20">Sales by Product</h3>
        <BarChart width={400} height={300} data={barData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="product" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default SalesChart;