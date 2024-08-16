// import React, { useState, useEffect } from 'react';
// import '../Style/ProductPage.css';
// import { useNavigate } from 'react-router-dom';

// const ProductsPage = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [cart, setCart] = useState([]);

//   const navigate = useNavigate();

//   useEffect(() => {
//     // Replace with your API endpoint to fetch products
//     fetch('http://localhost:7070/products/getProducts')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch products');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // Map product data to include the image URL based on the product ID
//         const productsWithImages = data.map((product) => ({
//           ...product,
//           imageUrl: `/images/${product.id}.jpg`, // Correct path from public directory
//         }));
//         setProducts(productsWithImages);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   const handleAddToCart = (product) => {
//     const updatedCart = [...cart, product];
//     setCart(updatedCart);
//     navigate('/cart', { state: { cartItems: updatedCart } });
//   };

//   if (loading) {
//     return <p>Loading products...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div className="products-page">
//       <h1>Our Products</h1>
//       <div className="products-grid">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <img
//               src={product.imageUrl}
//               alt={product.name}
//               onError={(e) => (e.target.src = '/images/placeholder.jpg')} // Fallback image
//               className="product-image"
//             />
//             <h2 className="product-pname">{product.name}</h2>
//             <p className="product-price">${product.price}</p>
//             <button
//               className="add-to-cart-button"
//               onClick={() => handleAddToCart(product)}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;




import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/ProductPage.css';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Replace with your API endpoint to fetch products
    fetch('http://localhost:7070/products/getProducts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then((data) => {
        // Map product data to include the image URL based on the product ID
        const productsWithImages = data.map((product) => ({
          ...product,
          imageUrl: `/images/${product.id}.jpg`, // Correct path from public directory
        }));
        setProducts(productsWithImages);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);

    // Navigate to the Payment component with the selected product's price as a query parameter
    navigate(`/payment?price=${product.price}`);
  };

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
            <h2 className="product-pname">{product.name}</h2>
            <p className="product-price">Rs{product.price}</p>
            <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
