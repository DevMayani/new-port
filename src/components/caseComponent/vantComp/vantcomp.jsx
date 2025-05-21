import React from 'react'
import './vantcomp.css';


const Vantcomp = () => {
  const buttonStyle = {
    backgroundColor: '#f3f4f6', // light gray
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
       <h2 className='vant_title'>Vantapp - Fintech Website</h2>
      </div>
      <div className='label_container'>
        <img src='/assets/vantwo.png' alt='vant_hero_img' className='image' />
        <div>
        <p className='label'><strong>Project Overview:</strong></p>
<p className='label_text'>Vantapp is a fintech platform designed to simplify digital payments, transactions, and account management for users. The platform provides secure and seamless financial services, empowering users to transfer money, manage their accounts, and track financial activities easily. As the Frontend Developer, I played a key role in developing a highly interactive and user-friendly web application using React, Tailwind CSS, and state management tools. The focus was on building a responsive UI, ensuring smooth performance, and integrating payment functionalities with security in mind.</p>
        </div>
        <div>
        <p className='label'><strong>My Contribution</strong></p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
  <button style={buttonStyle}>React.js</button>
  <button style={buttonStyle}>Tailwind CSS</button>
  <button style={buttonStyle}>Firebase Authentication</button>
  <button style={buttonStyle}>Payment Gateway Integration</button>
  <button style={buttonStyle}>Web Accessibility</button>
  <button style={buttonStyle}>Redux Toolkit</button>
  <button style={buttonStyle}>React Router</button>
  <button style={buttonStyle}>Axios</button>
  <button style={buttonStyle}>Git & GitHub</button>

  <button style={buttonStyle}>Sanity</button>
 
</div>

        </div>
        <div>
        <p className='label'><strong>Key Features I Built</strong></p>
<ul className='label_text'>
  <li><strong>User Account and Dashboard:</strong> Developed a customizable user dashboard that allows users to view their transaction history, account balances, and manage their settings.</li>
  <li><strong>Transaction Management:</strong> Built an easy-to-use interface for transferring funds, with real-time transaction updates and error handling to ensure smooth user experience.</li>
  <li><strong>Real-time Transaction Tracking:</strong> Integrated real-time data updates for user transactions with websockets, ensuring that users see their updated balances and transaction statuses without page reloads.</li>
  <li><strong>Secure Payment Gateway Integration:</strong> Integrated a payment gateway for seamless payment processing, allowing users to securely send and receive money in various currencies.</li>
  <li><strong>Role-based Access Control:</strong> Implemented Firebase Authentication and JWT-based secure login system with role management for different user types such as admins and regular users.</li>
  <li><strong>Responsive UI & UX:</strong> Developed a fully responsive design using Tailwind CSS that ensures a seamless experience across all devices.</li>
  <li><strong>Account Security:</strong> Implemented two-factor authentication (2FA) and encrypted data handling to ensure user information and transactions are secure.</li>
</ul>
        </div>
        <div>
        <p className='label'><strong>Performance Optimization</strong></p>
<ul className='label_text'>
  <li>Optimized for fast load times by utilizing React lazy loading and code splitting for efficient resource management.</li>
  <li>Enhanced SEO and page speed using Server-Side Rendering (SSR) with Next.js to ensure better discoverability and faster loading times.</li>
</ul>
        </div>
        <div>
        <p className='label'><strong>Business Impact:</strong></p>
<ul className='label_text'>
  <li>Improved user experience by reducing transaction processing time by 30% through optimized APIs and smooth UI interactions.</li>
  <li>Increased user engagement by 50% due to improved UI design and mobile responsiveness.</li>
  <li>Enhanced security features, reducing fraud and unauthorized access by 40% through robust user authentication and role-based access management.</li>
</ul>
        </div>
      </div>

      <a href="http://vantapp.com">
      <button style={{  backgroundColor: '#f3f4f6', // light gray
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    border: '1px solid #e5e7eb',
    cursor: 'pointer',
    fontSize: '0.875rem'}}>View Website</button>
      </a>

</div>

</section>
    </div>
  )
}

export default Vantcomp
