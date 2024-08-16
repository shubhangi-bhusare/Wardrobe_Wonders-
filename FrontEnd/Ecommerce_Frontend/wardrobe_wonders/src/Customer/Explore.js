import axios from 'axios';
import { useState, useEffect } from 'react';

const Explore = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('http://localhost:7070/products/getProducts');
        const productsWithImages = response.data.map((product) => ({
          ...product,
          imageUrl: `/images/${product.id}.jpg`, // Path to image
        }));
        setProducts(productsWithImages);
      } catch (error) {
        setError('Failed to fetch products.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="products-page">
      <h1>Our Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.imageUrl}
              alt={product.name}
              onError={(e) => (e.target.src = '/images/placeholder.jpg')} // Fallback image
              className="product-image"
            />
            <h2 className="product-name">{product.pname}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;