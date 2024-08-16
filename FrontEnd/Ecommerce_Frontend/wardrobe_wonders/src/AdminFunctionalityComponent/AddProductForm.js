import ProductService from '../services/ProductService';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/AddProduct.css';
const AddProductForm = () => {
  const [formData, setFormData] = useState({
    pname: '',
    description: '',
    stock: '',
    price: '',
    genderType: 'male', // default value
    category_id: '' // updated field
  });
  const navigate = useNavigate();

//   const handleChange = (e) => {
//     const pname = e.target.pname;
//     setFormData({
//       ...formData,
//       [pname]: e.target.value,
//     });
//   };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const addNewProduct=(e)=>{
    if(formData.pname===""||formData.description===""||formData.stock==""||formData.price===""||formData.genderType===""||formData.category_id==="")
    {
      alert("please fill all the details!!!");
      return;
    }
    ProductService.addProduct(formData)
    .then((result)=>{
      console.log(result);
      setFormData({pname:"",description:"",stock:"",price:"",genderType:"",category_id:""})
      navigate("/admin")
    })
    .catch((error)=>{
      console.log(error);
    });
}

//String pname, String description, int stock, double price, String genderType,
//ProductCategory category
  return (
    <form >
      <label>
        Name:
        <input
          type="text"
          name="pname"
          value={formData.pname}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Stock:
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </label>
      <fieldset>
        <legend>Gender:</legend>
        <label>
          <input
            type="radio"
            name="genderType"
            value="male"
            checked={formData.genderType === 'male'}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="genderType"
            value="female"
            checked={formData.genderType === 'female'}
            onChange={handleChange}
          />
          Female
        </label>
      </fieldset>
      <label>
        Category ID:
        <input
          type="number"
          name="category_id"
          value={formData.category_id}
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={(e)=>addNewProduct(e)}>Add Product</button>
    </form>
  );
};


export default AddProductForm;
