import axios from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const fetchUsers = async () => {
  const res = await axios.get(`${BASE_URL}/api/users`);
  return res.data.users;
};

export const fetchProjects = async () => {
  const res = await axios.get(`${BASE_URL}/api/projects`);
  return res.data.projects;
};