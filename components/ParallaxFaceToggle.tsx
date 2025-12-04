import React, { useState } from "react";

const AlcoviaToggle: React.FC = () => {
  const [activeState, setActiveState] = useState<"school" | "outside">(
    "school"
  );

  // Manual toggle for the button
  const toggleState = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveState((prev) => (prev === "school" ? "outside" : "school"));
  };

  // High-quality images matching the Alcovia theme
  const schoolImage =
    "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=2574&auto=format&fit=crop"; // Modern classroom/library
  const outsideImage =
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop"; // Professional/Meeting setting

  return (
    <>
      {/* 1. INJECTED STYLES */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        :root {
          --alc-speed: 0.8s;
          --alc-ease: cubic-bezier(0.25, 1, 0.5, 1);
          --alc-light: #f4f4f4;
          --alc-dark: #050505;
          /* Alcovia Brand Gradient Colors */
          --alc-grad-start: #f97316; 
          --alc-grad-middle: #ef4444; 
          --alc-grad-end: #ec4899; 
        }

        .alc-container {
          display: flex;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          position: relative;
          font-family: 'Inter', system-ui, sans-serif;
          background: var(--alc-dark);
        }

        /* PANEL STYLES */
        .alc-panel {
          position: relative;
          height: 100%;
          transition: flex var(--alc-speed) var(--alc-ease);
          overflow: hidden;
          cursor: default; /* Changed cursor since it's hover-based now */
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1; 
        }

        /* === IMAGE STYLES === */
        .alc-img-wrapper {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          overflow: hidden;
        }

        .alc-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.2; /* Subtle by default */
          filter: grayscale(100%) contrast(1.1);
          transition: 
            opacity var(--alc-speed) var(--alc-ease),
            filter var(--alc-speed) var(--alc-ease),
            transform var(--alc-speed) var(--alc-ease);
        }

        /* Active State Image: Full Color & Brighter */
        .alc-panel.active .alc-img {
          opacity: 0.7; 
          filter: grayscale(0%) contrast(1);
          transform: scale(1.05);
        }

        /* STATE COLORS */
        .alc-panel.school {
          background-color: var(--alc-light);
          color: var(--alc-dark);
        }
        
        .alc-panel.outside {
          background-color: var(--alc-dark);
          color: white;
        }
        
        /* Dark overlay for Outside panel to read text */
        .alc-panel.outside::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8));
            z-index: 2;
            pointer-events: none;
        }

        /* ACTIVE / INACTIVE LOGIC */
        .alc-panel.active {
          flex: 4; /* Expanded width */
          z-index: 10;
        }

        .alc-panel.inactive {
          flex: 1; /* Compressed width */
        }
        
        .alc-panel.inactive:hover .alc-img {
          opacity: 0.4;
        }

        /* CONTENT */
        .alc-content {
          position: relative;
          z-index: 5;
          text-align: center;
          padding: 2rem;
          max-width: 600px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .alc-bg-text {
          font-size: 15vh;
          line-height: 0.85;
          font-weight: 900;
          opacity: 0.05;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          white-space: nowrap;
          transition: transform 1s var(--alc-ease), opacity 1s var(--alc-ease);
          pointer-events: none;
        }

        .alc-panel.active .alc-bg-text {
          transform: translate(-50%, -50%) scale(1.1);
          opacity: 0.1;
        }

        .alc-subtitle {
          font-size: 2.5rem;
          font-weight: 800;
          margin: 0 0 1rem 0;
          text-transform: uppercase;
          letter-spacing: -0.02em;
        }

        .alc-desc {
          font-size: 1.25rem;
          line-height: 1.6;
          max-width: 450px;
          font-weight: 500;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s;
        }

        .alc-panel.active .alc-desc {
          opacity: 1;
          transform: translateY(0);
        }

        /* BUTTON */
        .alc-toggle-wrapper {
          position: absolute;
          bottom: 8%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
          pointer-events: auto; /* Ensure button is clickable even if panels are hoverable */
        }

        .alc-btn {
          background: black;
          color: white;
          border: none;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: 800;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
          overflow: hidden;
          font-size: 0.9rem;
        }

        .alc-btn::before {
            content: '';
            position: absolute;
            inset: 0;
            padding: 2px;
            border-radius: inherit;
            background: linear-gradient(to right, var(--alc-grad-start), var(--alc-grad-middle), var(--alc-grad-end));
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .alc-btn:hover {
          transform: translateY(-2px) scale(1.02);
        }
        
        .alc-btn:hover::before {
            opacity: 1;
        }

        @media (max-width: 768px) {
          .alc-container { flex-direction: column; }
          .alc-bg-text { font-size: 10vh; }
          .alc-subtitle { font-size: 1.75rem; }
          .alc-desc { font-size: 1rem; max-width: 90%; }
          .alc-panel.active { flex-grow: 3; }
          .alc-panel.inactive { flex-grow: 1; }
        }
      `,
        }}
      />

      {/* 2. COMPONENT JSX */}
      <div className="alc-container">
        {/* --- LEFT PANEL: AT SCHOOL --- */}
        <div
          className={`alc-panel school ${
            activeState === "school" ? "active" : "inactive"
          }`}
          onMouseEnter={() => setActiveState("school")} // Hover Trigger
        >
          <div className="alc-img-wrapper">
            <img src={schoolImage} alt="School Classroom" className="alc-img" />
          </div>

          <h2 className="alc-bg-text">
            ON
            <br />
            TRACK
          </h2>
          <div className="alc-content">
            <h3 className="alc-subtitle">At School</h3>
            <p className="alc-desc">
              How Alcovia helps students ace their academics and stay ahead of
              the curve in the classroom.
            </p>
          </div>
        </div>

        {/* --- RIGHT PANEL: OUTSIDE SCHOOL --- */}
        <div
          className={`alc-panel outside ${
            activeState === "outside" ? "active" : "inactive"
          }`}
          onMouseEnter={() => setActiveState("outside")} // Hover Trigger
        >
          <div className="alc-img-wrapper">
            <img
              src={outsideImage}
              alt="Professional World"
              className="alc-img"
            />
          </div>

          <h2 className="alc-bg-text">
            OFF
            <br />
            TRACK
          </h2>
          <div className="alc-content">
            <h3 className="alc-subtitle">Outside School</h3>
            <p className="alc-desc">
              Building differentiation through real-world exposure, mentorship,
              and hyper-personalised guidance.
            </p>
          </div>
        </div>

        {/* --- CENTER TOGGLE BUTTON (Visual Indicator / Manual Switch) --- */}
        <div className="alc-toggle-wrapper">
          <button className="alc-btn" onClick={toggleState}>
            <span>{activeState === "school" ? "→" : "←"}</span>
            <span>Switch Focus</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default AlcoviaToggle;
