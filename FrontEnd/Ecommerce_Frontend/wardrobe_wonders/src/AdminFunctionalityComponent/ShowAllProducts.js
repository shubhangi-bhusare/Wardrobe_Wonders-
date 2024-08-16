import React, { useState, useEffect } from 'react';
import ProductService from '../services/ProductService';
import '../Style/ShowAllProducts.css';

function ShowAllProducts() {
  const [products, setProducts] = useState([]);

  // Fetch all products when the component mounts
  useEffect(() => {
    ProductService.getAllproducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="show-all-products-container">
      <h2 className="show-all-products-heading">All Products</h2>
      <table className="show-all-products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Gender Type</th>
            <th>Category ID</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.pname}</td>
                <td>{product.description}</td>
                <td>{product.stock}</td>
                <td>{product.price}</td>
                <td>{product.genderType}</td>
                <td>{product.category_id}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No products available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ShowAllProducts;

