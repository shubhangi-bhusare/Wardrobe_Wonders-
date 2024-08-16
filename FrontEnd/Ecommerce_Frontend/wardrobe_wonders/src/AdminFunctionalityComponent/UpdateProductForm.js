import React, { useState, useEffect } from 'react';
import ProductService from '../services/ProductService';
import { useNavigate } from 'react-router-dom';


function UpdateProductForm() {
  const [formData, setFormData] = useState({
    id: '', // Assuming you have an ID field to identify the product
    pname: '',
    description: '',
    stock: '',
    price: '',
    genderType: 'Female',
    category_id: ''
  });
  const navigate = useNavigate();

  // Fetch product details on component mount (or you can set it manually if you're not fetching)
  useEffect(() => {
    // Simulate fetching product data to update (you could get this data from props or a service)
    const product = {
      id: 123,
      pname: 'Example Product',
      description: 'This is an example product.',
      stock: 20,
      price: 99.99,
      genderType: 'Female',
      category_id: 1
    };
    setFormData(product);
  }, []);

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission for updating the product
  const updateProduct = () => {
    // Validate required fields
    if (!formData.pname || !formData.description || !formData.stock || !formData.price || !formData.category_id) {
      alert('Please fill all required fields.');
      return;
    }

    // Ensure stock and price are numbers
    const productData = {
      ...formData,
      stock: parseInt(formData.stock, 10),
      price: parseFloat(formData.price),
      category_Id: parseInt(formData.category_id, 10),
    };

    ProductService.updateProduct(productData)
      .then((result) => {
        console.log('Product updated:', result);
        navigate('/admin'); // Redirect to the admin page or show a success message
      })
      .catch((error) => {
        console.error('Error updating product:', error);
        alert('Error updating product.');
      });
  };

  return (
    <form>
      <h2>Update Product</h2>

      <div>
        <label htmlFor="id">Product ID:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={formData.id}
          onChange={handleChange}
          
        />
      </div>

      <div>
        <label htmlFor="pname">Product Name:</label>
        <input
          type="text"
          id="pname"
          name="pname"
          value={formData.pname}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div>
        <label htmlFor="stock">Stock:</label>
        <input
          type="number"
          id="stock"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          step="0.01"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>

      <fieldset>
        <legend>Gender Type:</legend>
        <label>
          <input
            type="radio"
            name="genderType"
            value="Female"
            checked={formData.genderType === 'Female'}
            onChange={handleChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="genderType"
            value="Male"
            checked={formData.genderType === 'Male'}
            onChange={handleChange}
          />
          Male
        </label>
      </fieldset>

      <div>
        <label htmlFor="category_id">Category ID:</label>
        <input
          type="number"
          id="category_id"
          name="category_id"
          value={formData.category_id}
          onChange={handleChange}
          required
        />
      </div>

      <button type="button" onClick={updateProduct}>Update Product</button>
    </form>
  );
}

export default UpdateProductForm;