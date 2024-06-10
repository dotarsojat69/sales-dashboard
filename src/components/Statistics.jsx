import React from 'react';

const Statistics = ({ sales }) => {
  const totalSales = sales.reduce((acc, sale) => acc + sale.sales, 0);
  const totalRevenue = sales.reduce((acc, sale) => acc + sale.revenue, 0);
  const bestSellingProduct = sales.reduce((acc, sale) => {
    return sale.sales > acc.sales ? sale : acc;
  }, { sales: 0 }).product;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-blue-100 p-6 rounded-lg shadow-md">
        <h4 className="text-lg font-semibold text-blue-800">Total Sales</h4>
        <p className="text-3xl font-bold text-blue-900">{totalSales}</p>
      </div>
      <div className="bg-green-100 p-6 rounded-lg shadow-md">
        <h4 className="text-lg font-semibold text-green-800">Total Revenue</h4>
        <p className="text-3xl font-bold text-green-900">${totalRevenue}</p>
      </div>
      <div className="bg-purple-100 p-6 rounded-lg shadow-md">
        <h4 className="text-lg font-semibold text-purple-800">Best Selling Product</h4>
        <p className="text-3xl font-bold text-purple-900">{bestSellingProduct}</p>
      </div>
    </div>
  );
};

export default Statistics;