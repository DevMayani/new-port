import React from 'react';
import './campusgenie.css';

const Campuscomp = () => {
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
            <h2 className='vant_title'>Campus Genie - Student Utility Platform</h2>
          </div>

          <div className='label_container'>
            <img src='/assets/camp.png' alt='campusgenie_hero_img' className='image' />

            <div>
              <p className='label'><strong>Project Overview:</strong></p>
              <p className='label_text'>
                Campus Genie is a smart platform designed to simplify campus life for students. It offers a centralized space for accessing academic resources, receiving campus news and event updates, and connecting with peers. As the Frontend Developer, I built the application using <strong>Next.js</strong> and <strong>Tailwind CSS</strong>, enabling server-side rendering for performance and SEO, and implemented a smooth, intuitive UX with reusable, accessible components.
              </p>
            </div>

            <div>
              <p className='label'><strong>My Contribution</strong></p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                <button style={buttonStyle}>Next.js</button>
                <button style={buttonStyle}>Tailwind CSS</button>
                <button style={buttonStyle}>Firebase Authentication</button>
                <button style={buttonStyle}>React Hook Form</button>
                <button style={buttonStyle}>Dynamic Routing</button>
                <button style={buttonStyle}>SEO Optimization</button>
                <button style={buttonStyle}>Web Accessibility</button>
                <button style={buttonStyle}>Git & GitHub</button>
                <button style={buttonStyle}>CI/CD</button>
              </div>
            </div>

            <div>
              <p className='label'><strong>Key Features I Built</strong></p>
              <ul className='label_text'>
                <li><strong>Student Dashboard:</strong> Created a central hub where students can view classes, tasks, events, and announcements.</li>
                <li><strong>Academic Resources:</strong> Built a searchable resource library for course materials and notes using dynamic routes.</li>
                <li><strong>Event Feed:</strong> Integrated a real-time event/news system using Firebase and conditional rendering for status updates.</li>
                <li><strong>Authentication:</strong> Used Firebase Auth with role-based access to manage students vs admins.</li>
                <li><strong>Responsive & Accessible Design:</strong> Ensured every component was optimized for mobile use and screen readers.</li>
              </ul>
            </div>

            <div>
              <p className='label'><strong>Performance Optimization</strong></p>
              <ul className='label_text'>
                <li>Used server-side rendering and image optimization in Next.js for fast loading and better SEO.</li>
                <li>Implemented lazy loading, dynamic imports, and minimal bundle sizes for improved performance.</li>
              </ul>
            </div>

            <div>
              <p className='label'><strong>Business Impact:</strong></p>
              <ul className='label_text'>
                <li>Improved campus communication efficiency and student engagement by consolidating services in one platform.</li>
                <li>Reduced resource search time by over 50% with categorized academic content.</li>
                <li>Enhanced visibility and discoverability via optimized metadata and Next.js SEO features.</li>
              </ul>
            </div>
          </div>

          <a href="https://www.campusgenie.app/" target="_blank" rel="noopener noreferrer">
            <button style={buttonStyle}>
              View Website
            </button>
          </a>
        </div>

      </section>
    </div>
  );
};

export default Campuscomp;
