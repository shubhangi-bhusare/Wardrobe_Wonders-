import React, { useState, useEffect } from 'react';
import UserService from '../services/UserService'; // Ensure this service is correctly set up
import '../Style/ShowAllUsers.css'; // Import your CSS file

function ShowAllUsers() {
  const [users, setUsers] = useState([]);

  // Fetch all users when the component mounts
  useEffect(() => {
    UserService.getallusers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div className="show-all-users-container">
      <h2 className="show-all-users-heading">All Users</h2>
      <table className="show-all-users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Mobile No</th>
            <th>Address</th>
            <th>Zipcode</th>
            <th>City</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}> {/* Use ID as the unique key */}
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.mobileNumber}</td>
                <td>{user.address}</td>
                <td>{user.zipcode}</td>
                <td>{user.city}</td>
                <td>{user.state}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No users available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ShowAllUsers;