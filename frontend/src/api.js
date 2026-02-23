// Use environment variable for backend URL
const BASE_URL = process.env.REACT_APP_BACKEND_URL;

// Fetch all users
export const fetchUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/users`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};