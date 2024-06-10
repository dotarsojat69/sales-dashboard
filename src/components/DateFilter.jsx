import React from 'react';
import dayjs from 'dayjs';

const DateFilter = ({ onDateChange }) => {
  const handleStartDateChange = (e) => {
    onDateChange({ startDate: e.target.value, endDate: null });
  };

  const handleEndDateChange = (e) => {
    onDateChange({ startDate: null, endDate: e.target.value });
  };

  return (
    <div className="flex space-x-4">
      <input
        type="date"
        onChange={handleStartDateChange}
        defaultValue={dayjs().subtract(7, 'day').format('YYYY-MM-DD')}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="date"
        onChange={handleEndDateChange}
        defaultValue={dayjs().format('YYYY-MM-DD')}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default DateFilter;