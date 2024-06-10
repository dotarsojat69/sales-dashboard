import axios from 'axios';
import { API_BASE_URL } from './config';

const salesApiRoutes = {
  getAllSales: '/api/sales',
};

export const fetchSales = async (params = {}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}${salesApiRoutes.getAllSales}`, { params });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching sales:', error);
    throw error;
  }
};