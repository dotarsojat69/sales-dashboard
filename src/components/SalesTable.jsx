import React from 'react';

const SalesTable = ({ sales }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="text-gray-600 uppercase text-sm leading-normal">
            <th className="bg-slate-200 py-3 px-6 text-left">Product</th>
            <th className="bg-slate-100 py-3 px-6 text-left">Date</th>
            <th className="bg-slate-200 py-3 px-6 text-left">Sales</th>
            <th className="bg-slate-100 py-3 px-6 text-left">Revenue</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-semibold">
          {sales.map((sale) => (
            <tr key={sale.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left bg-slate-300">{sale.product}</td>
              <td className="py-3 px-6 text-left">{sale.date}</td>
              <td className="py-3 px-6 text-left bg-slate-300">{sale.sales}</td>
              <td className="py-3 px-6 text-left">${sale.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;