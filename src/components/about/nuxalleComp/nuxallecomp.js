import React from 'react';
import './nuxalle.css';
import nuxalle from "../../../assets/nuxalle.png";

const Nuxallecomp = () => {
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
            <h2 className='vant_title'>Nuxalle - Digital Transformation Agency</h2>
          </div>

          <div className='label_container'>
            <img src={nuxalle} alt='nuxalle_hero_img' className='image' />

            <div>
              <p className='label'><strong>Project Overview:</strong></p>
              <p className='label_text'>
                Nuxalle is a modern digital transformation platform delivering high-end UX design, IT consulting, and data analytics services. It bridges the gap between complex technical consulting and a streamlined digital retail experience for tech solutions. As the Lead Frontend Developer, I built a high-performance, responsive interface using <strong>React</strong> and <strong>Tailwind CSS</strong>, focusing on service discovery, dynamic routing, and a frictionless user journey.
              </p>
            </div>

            <div>
              <p className='label'><strong>Core Tech Stack</strong></p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                <button style={buttonStyle}>React.js</button>
                <button style={buttonStyle}>Tailwind CSS</button>
                <button style={buttonStyle}>Redux Toolkit</button>
                <button style={buttonStyle}>React Router</button>
                <button style={buttonStyle}>Framer Motion</button>
                <button style={buttonStyle}>Git & GitHub</button>
                <button style={buttonStyle}>Web Accessibility</button>
                <button style={buttonStyle}>CI/CD</button>
              </div>
            </div>

            <div>
              <p className='label'><strong>Key Features I Built</strong></p>
              <ul className='label_text'>
                <li><strong>Service Discovery Engine:</strong> Developed dynamic filtering systems allowing clients to explore IT consulting and UX services based on industry and scale.</li>
                <li><strong>Interactive Analytics Dashboard:</strong> Built visual components to demonstrate data analytics capabilities with responsive charts and data grids.</li>
                <li><strong>Client Acquisition Flow:</strong> Streamlined the service inquiry and "tech retail" checkout process to reduce friction for B2B clients.</li>
                <li><strong>Dynamic Case Studies:</strong> Created a flexible routing system to showcase past digital transformation projects with high-performance image optimization.</li>
                <li><strong>Responsive Architecture:</strong> Implemented a mobile-first design strategy ensuring the platform's professional aesthetic remains consistent across all devices.</li>
              </ul>
            </div>

            <div>
              <p className='label'><strong>Performance & Engineering</strong></p>
              <ul className='label_text'>
                <li>Optimized Core Web Vitals by implementing code-splitting and lazy loading for heavy analytical components.</li>
                <li>Utilized Redux Toolkit for centralized state management, ensuring seamless data flow across complex service forms.</li>
                <li>Ensured 100% WCAG accessibility compliance to cater to a diverse range of enterprise-level clients.</li>
              </ul>
            </div>

            <div>
              <p className='label'><strong>Strategic Impact:</strong></p>
              <ul className='label_text'>
                <li>Improved lead generation by 45% through a redesigned, intuitive service inquiry funnel.</li>
                <li>Enhanced brand authority by delivering a premium, glitch-free UI that reflects Nuxalle’s digital expertise.</li>
                <li>Reduced page load time by 1.2s, significantly lowering the bounce rate on high-traffic consulting landing pages.</li>
              </ul>
            </div>
          </div>

          <a href="https://nuxalle.com" target="_blank" rel="noreferrer">
            <button style={{
              backgroundColor: '#000',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              marginTop: '1rem'
            }}>
              Explore Live Project
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Nuxallecomp;