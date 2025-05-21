import React from 'react';
import './gadgetify.css';

const Gadgetcomp = () => {
  const buttonStyle = {
    backgroundColor: '#f3f4f6',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    border: '1px solid #e5e7eb',
    cursor: 'pointer',
    fontSize: '0.875rem'
  };

  return (
    <div>
    <section className='main_container'>

      <div className='main_container_subsection'>
        <div>
          <h1 className='main_container_title'>Frontend Case Study</h1>
          <h2 className='vant_title'>Gadgetify - E-commerce Website</h2>
        </div>

        <div className='label_container'>
          <img src='/assets/gagd.png' alt='gadgetify_hero_img' className='image' />

          <div>
            <p className='label'><strong>Project Overview:</strong></p>
            <p className='label_text'>
              Gadgetify is a modern e-commerce platform focused on selling smartphones, gadgets, and tech accessories. It provides a sleek, intuitive shopping experience that lets users explore, compare, and purchase tech products seamlessly. As the Frontend Developer, I built responsive UI components using React and Tailwind CSS, implemented product filtering, dynamic routing, and integrated secure checkout functionality to enhance user experience.
            </p>
          </div>

          <div>
            <p className='label'><strong>My Contribution</strong></p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
              <button style={buttonStyle}>Next.js</button>
              <button style={buttonStyle}>Tailwind CSS</button>
              <button style={buttonStyle}>Redux Toolkit</button>
              <button style={buttonStyle}>React Router</button>
              <button style={buttonStyle}>Firebase</button>
              <button style={buttonStyle}>Payment Integration</button>
              <button style={buttonStyle}>Git & GitHub</button>
              <button style={buttonStyle}>Web Accessibility</button>
              <button style={buttonStyle}>CI/CD</button>
            </div>
          </div>

          <div>
            <p className='label'><strong>Key Features I Built</strong></p>
            <ul className='label_text'>
              <li><strong>Product Listings:</strong> Built responsive, filterable product grids with pagination and dynamic category pages.</li>
              <li><strong>Single Product View:</strong> Implemented detailed product pages with image carousel, specs, pricing, and related items.</li>
              <li><strong>Shopping Cart & Wishlist:</strong> Created a user-friendly cart and wishlist system with local and global state management.</li>
              <li><strong>Checkout Flow:</strong> Integrated secure payment gateways for smooth and trusted transactions.</li>
              <li><strong>User Authentication:</strong> Used Firebase for login, signup, and protected user dashboard with order history.</li>
              <li><strong>Mobile-first Design:</strong> Designed and tested all components to be fully responsive and touch-optimized.</li>
            </ul>
          </div>

          <div>
            <p className='label'><strong>Performance Optimization</strong></p>
            <ul className='label_text'>
              <li>Lazy loaded images and components to reduce initial load time and improve mobile performance.</li>
              <li>Used code-splitting and caching strategies to speed up repeat visits and reduce server load.</li>
            </ul>
          </div>

          <div>
            <p className='label'><strong>Business Impact:</strong></p>
            <ul className='label_text'>
              <li>Increased user conversion rates by 40% due to simplified checkout flow and faster load times.</li>
              <li>Boosted customer retention with wishlist, related products, and personalized recommendations.</li>
              <li>Reduced bounce rate by over 35% through responsive, engaging UI and improved mobile UX.</li>
            </ul>
          </div>
        </div>

        <a href="https://gadgetify.ng/">
          <button style={{
            backgroundColor: '#f3f4f6',
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            border: '1px solid #e5e7eb',
            cursor: 'pointer',
            fontSize: '0.875rem'
          }}>
            View Website
          </button>
        </a>
      </div>

    </section>
  </div>
  );
};

export default Gadgetcomp;
