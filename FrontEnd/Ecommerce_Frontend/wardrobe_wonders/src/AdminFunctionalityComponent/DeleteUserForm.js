import UserService from '../services/UserService';
import React, { useState } from 'react';


function DeleteUserForm() {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setId(e.target.value);
  };
  

  const deleteUserById = () => {//not pass id in deleteUserById Function
   
    if(!id)
    {
        setMessage('Please enter a valid user ID.');
        return;
    }
    UserService.deleteUser(id)
    .then((result)=>{
        console.log("in delete user",result);
        setMessage(`User with ID ${id} deleted successfully!`);

    })
    .catch((err)=>{
        console.log(err);
        setMessage('Error in deleting user');
        
    })
  };

  return (
    <div className="delete-user-form">
      <h2>Delete User by ID</h2>
      <form >
        <label htmlFor="id">User ID:</label>
        <input
          type="number"
          id="id"
          value={id}
          onChange={handleInputChange}
          placeholder="Enter user ID"
          required
        />
        <button type="button" onClick={deleteUserById}>Delete User</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default DeleteUserForm;
