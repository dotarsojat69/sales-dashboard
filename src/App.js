import React, { useState, useEffect } from 'react';

import SearchBar from './components/SearchBar';
import DateFilter from './components/DateFilter';
import SalesTable from './components/SalesTable';
import SalesChart from './components/SalesChart';
import Statistics from './components/Statistics';

import { fetchSales } from './api/salesApi';
import { toast } from 'sonner';

function App() {
  const [sales, setSales] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });

  useEffect(() => {
    const loadSales = async () => {
      try {
        const salesData = await fetchSales();
        setSales(salesData);
      } catch (error) {
        console.error('Failed to load sales:', error);
        toast("Please try again")
      }
    };
    loadSales();
  }, []);

  useEffect(() => {
    const filterSales = async () => {
      try {
        const params = {};
        if (searchTerm) {
          params.product = searchTerm;
        }
        if (dateRange.startDate) {
          params.start_date = dateRange.startDate;
        }
        if (dateRange.endDate) {
          params.end_date = dateRange.endDate;
        }

        const filteredData = await fetchSales(params);
        setSales(filteredData);
      } catch (error) {
        console.error('Failed to filter sales:', error);
        toast("Please try again")
        // Tambahkan notifikasi error untuk pengguna di sini
      }
    };

    filterSales();
  }, [searchTerm, dateRange]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleDateChange = (newDateRange) => {
    setDateRange(prevRange => ({ ...prevRange, ...newDateRange }));
  };

  return (
    <div className="container md:items-center px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Sales Analytics Dashboard</h1>
      
      <div className="mb-8">
        <Statistics sales={sales} />
      </div>
      
      <div className="grid gap-3 xl:flex md:flex justify-between mb-8">
        <SearchBar onSearch={handleSearch} />
        <DateFilter onDateChange={handleDateChange} />
      </div>
      
      <div className="mb-12">
        <SalesChart sales={sales} />
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">Sales Table</h2>
        <SalesTable sales={sales} />
      </div>
    </div>
  );
}

export default App;