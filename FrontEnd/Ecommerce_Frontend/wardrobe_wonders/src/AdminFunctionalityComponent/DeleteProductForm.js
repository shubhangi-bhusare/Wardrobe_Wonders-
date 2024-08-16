import ProductService from '../services/ProductService';
import React, { useState } from 'react';


function DeleteProductForm() {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setId(e.target.value);
  };
  

  const deleteProductById = () => {//not pass id in deleteUserById Function becoz it is just event handler and we dont pass id for it in below onclick event
   
    if(!id)
    {
        setMessage('Please enter a valid product ID.');
        return;
    }
    ProductService.deleteProduct(id)
    .then((result)=>{
        console.log("in delete product",result);
        setMessage(`Product with ID ${id} deleted successfully!`);

    })
    .catch((err)=>{
        console.log(err);
        setMessage('Error in deleting Product');
        
    })
  };

  return (
    <div className="delete-product-form">
      <h2>Delete Product by ID</h2>
      <form >
        <label htmlFor="id">Product ID:</label>
        <input
          type="number"
          id="id"
          value={id}
          onChange={handleInputChange}
          placeholder="Enter Product ID"
          required
        />
        <button type="button" onClick={deleteProductById}>Delete Product</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default DeleteProductForm;
