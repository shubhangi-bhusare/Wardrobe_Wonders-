// import React from 'react';
// import './HomeComponent.css';

// const HomeComponent = () => {
//   return (
//     <div className="home-container">
//       <section className="hero-section">
//         <div className="hero-content">
//           <h1>Discover Your Unique Style</h1>
//           <p>Explore our exclusive collections and elevate your wardrobe.</p>
//           <button className="explore-btn">Explore Now</button>
//         </div>
//       </section>

//       {/* <section className="promotional-section">
//         <div className="promo-content">
//           <h2>Seasonal Sale - Up to 50% Off!</h2>
//           <p>Grab the best deals on your favorite fashion pieces before they’re gone.</p>
//           <button className="learn-more-btn">Learn More</button>
//         </div>
//       </section> */}

//       <section className="about-section">
//         <div className="about-content">
//           <h2>About Us</h2>
//           <p>At Wardrobe Wonders, we believe in celebrating individuality through fashion. Our carefully curated collections are designed to inspire and elevate your style.</p>
//           {/* <button className="read-more-btn">Read More</button> */}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomeComponent;

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './HomeComponent.css';

const HomeComponent = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/customer'); // Navigate to the desired path, e.g., "/explore"
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Discover Your Unique Style</h1>
          <p>Explore our exclusive collections and elevate your wardrobe.</p>
          <button className="explore-btn" onClick={handleExploreClick}>
            Explore Now
          </button>
        </div>
      </section>

      {/* <section className="promotional-section">
        <div className="promo-content">
          <h2>Seasonal Sale - Up to 50% Off!</h2>
          <p>Grab the best deals on your favorite fashion pieces before they’re gone.</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </section> */}

      <section className="about-section">
        <div className="about-content">
          <h2>About Us</h2>
          <p>At Wardrobe Wonders, we believe in celebrating individuality through fashion. Our carefully curated collections are designed to inspire and elevate your style.</p>
          {/* <button className="read-more-btn">Read More</button> */}
        </div>
      </section>
    </div>
  );
};

export default HomeComponent;

