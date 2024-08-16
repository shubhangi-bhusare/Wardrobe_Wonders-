import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Import the CSS file
import UserService from '../services/UserService';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    mobileNumber: '',
    address: '',
    zipcode: '',
    city: '',
    state: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    setFormData({
      ...formData,
      [name]: e.target.value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Implement your registration logic here
  //   console.log('User Registered:', formData);
  //   // Redirect to login or dashboard after successful registration
  //   navigate('/login');
  // };
  const addNewUser=()=>{
    if(formData.name===""||formData.email===""||formData.password==""||formData.role===""||formData.mobileNumber===""||formData.address===""||formData.zipcode===""||formData.city===""||formData.state==="")
    {
      alert("please fill all the details!!!");
      return;
    }
    UserService.addUser(formData)
    .then((result)=>{
      console.log(result);
      setFormData({name:"",password:"",role:"",mobileNumber:"",address:"",zipcode:"",city:"",state:""})
      navigate("/login")
    })
    .catch((error=>{
      console.log(error);
    }));
  }

  return (
    <div className="container">
      <h2 className="header">Register</h2>
      <form className="form">
        <div className="formGroup">
          <label className="label" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        <div className="formGroup">
          <label className="label" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        <div className="formGroup">
          <label className="label" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        <div className="formGroup">
          <label className="label">Role</label>
          <div className="radioGroup">
            <label className="radioLabel">
              <input
                type="radio"
                name="role"
                value="ROLE_CUSTOMER"
                checked={formData.role === 'ROLE_CUSTOMER'}
                onChange={handleChange}
                required
              />
            CUSTOMER
            </label>
            {/* <label className="radioLabel">
              <input
                type="radio"
                name="role"
                value="ROLE_ADMIN"
                checked={formData.role === 'ROLE_ADMIN'}
                onChange={handleChange}
                required
              />
             ADMIN
            </label> */}
          </div>
        </div>

        <div className="formGroup">
          <label className="label" htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Enter your mobile number"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        <div className="formGroup">
          <label className="label" htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        <div className="formGroup">
          <label className="label" htmlFor="zipcode">ZIP Code</label>
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            placeholder="Enter your ZIP code"
            value={formData.zipcode}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        <div className="formGroup">
          <label className="label" htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter your city"
            value={formData.city}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        <div className="formGroup">
          <label className="label" htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            placeholder="Enter your state"
            value={formData.state}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        <button type="button" className="button" onClick={(e)=>addNewUser(e)}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;