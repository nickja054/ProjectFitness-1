// API Base URL Configuration
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Helper function for API calls
export const apiCall = (endpoint) => {
  return `${API_BASE_URL}${endpoint}`;
};