// Use environment variable for backend URL or default to localhost for local testing
const BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

// Generic function to handle GET requests
const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`Network response was not ok (${response.status})`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return null;
  }
};

// Fetch all users
export const fetchUsers = async () => {
  const data = await fetchData("/api/users");
  return data?.users || [];
};

// Fetch a single user by ID (example for dynamic API)
export const fetchUserById = async (id) => {
  const data = await fetchData(`/api/users/${id}`);
  return data || {};
};

// Example: Fetch projects for portfolio
export const fetchProjects = async () => {
  const data = await fetchData("/api/projects");
  return data?.projects || [];
};