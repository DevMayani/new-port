import React from 'react';
import './theragist.css';

const Theragistcomp = () => {
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
            <h2 className='vant_title'>Theragist - Online Therapy Platform</h2>
          </div>

          <div className='label_container'>
            <img src='/assets/theragist.png' alt='theragist_hero_img' className='image' />

            <div>
              <p className='label'><strong>Project Overview:</strong></p>
              <p className='label_text'>
                Theragist is a cutting-edge web therapy platform designed to help users seamlessly connect with licensed therapists. The platform prioritizes accessibility, simplicity, and mental health support through a user-friendly interface and secure communication tools. Built using <strong>Next.js</strong> and <strong>CSS</strong>, the app provides a mobile-first experience optimized for webview.
              </p>
            </div>

            <div>
              <p className='label'><strong>My Contribution</strong></p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                <button style={buttonStyle}>Next.js</button>
                <button style={buttonStyle}>Sanity</button>
                <button style={buttonStyle}>CSS</button>
                <button style={buttonStyle}>Redux Toolkit</button>
                <button style={buttonStyle}>Responsive Design</button>
                <button style={buttonStyle}>React Hook Form</button>
                <button style={buttonStyle}>Dynamic Routing</button>
                <button style={buttonStyle}>Firebase Auth</button>
                <button style={buttonStyle}>Git & GitHub</button>
                <button style={buttonStyle}>Web Accessibility</button>
              </div>
            </div>

            <div>
              <p className='label'><strong>Key Features I Built</strong></p>
              <ul className='label_text'>
                <li><strong>User Onboarding:</strong> Designed and implemented multi-step sign-up/login flows with validation.</li>
                <li><strong>Therapist Directory:</strong> Built a searchable list with filters based on specialization, availability, and language.</li>
                <li><strong>Booking System:</strong> Developed a real-time session booking feature with calendar sync support.</li>
                <li><strong>Chat Integration:</strong> Integrated secure one-on-one chat and session feedback components.</li>
                <li><strong>Mobile Optimization:</strong> Designed for web app view with touch-friendly and scroll-friendly components.</li>
              </ul>
            </div>

            <div>
              <p className='label'><strong>Performance Optimization</strong></p>
              <ul className='label_text'>
                <li>Implemented lazy loading, code splitting, and optimized assets for faster load times on mobile networks.</li>
                <li>Reduced CSS bloat using modular and component-scoped styles.</li>
              </ul>
            </div>

            <div>
              <p className='label'><strong>Business Impact:</strong></p>
              <ul className='label_text'>
                <li>Enabled users to schedule therapy sessions with ease, leading to higher engagement and retention.</li>
                <li>Boosted mental health access for users in remote areas through an intuitive, lightweight interface.</li>
                <li>Reduced bounce rates with a clear user journey and personalized dashboard experience.</li>
              </ul>
            </div>
          </div>

          <a href="https://www.theragist.com/" target="_blank" rel="noopener noreferrer">
            <button style={buttonStyle}>
              View Website
            </button>
          </a>
        </div>

      </section>
    </div>
  );
};

export default Theragistcomp;
