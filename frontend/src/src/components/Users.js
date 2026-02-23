import React, { useEffect, useState } from "react";
import { fetchUsers } from "../api"; // import API functions

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user, idx) => (
          <li key={idx}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;