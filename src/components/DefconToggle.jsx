import React, { useState, useEffect } from 'react';

export default function DefconToggle() {
  const [defconLevel, setDefconLevel] = useState(5);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const applyDefcon = (level) => {
      if (level === 1) {
        document.documentElement.style.setProperty('--color-bg', '#3b0000');
        document.documentElement.style.setProperty('--color-ice-blue', '#ffffff');
        document.body.classList.add('defcon-active');
      } else {
        document.documentElement.style.setProperty('--color-bg', '#050505');
        document.documentElement.style.setProperty('--color-ice-blue', '#38bdf8');
        document.body.classList.remove('defcon-active');
      }
    };

    const initDefcon = () => {
      const savedLevel = sessionStorage.getItem('defconLevel');
      if (savedLevel === '1') {
        setDefconLevel(1);
        applyDefcon(1);
      }
    };

    // Run on initial mount and after every Astro page swap
    initDefcon();
    document.addEventListener('astro:after-swap', initDefcon);

    // Listen for custom event if terminal changes it
    const handleDefconChange = (e) => {
      const level = e.detail.level;
      setDefconLevel(level);
      sessionStorage.setItem('defconLevel', level);
      applyDefcon(level);
      
      if (level === 1) {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
      }
    };
    
    window.addEventListener('defcon-change', handleDefconChange);
    
    return () => {
      document.removeEventListener('astro:after-swap', initDefcon);
      window.removeEventListener('defcon-change', handleDefconChange);
    };
  }, []);

  const toggleDefcon = () => {
    const newLevel = defconLevel === 5 ? 1 : 5;
    // Dispatch event to trigger the listener which handles all state changes
    window.dispatchEvent(new CustomEvent('defcon-change', { detail: { level: newLevel } }));
  };

  return (
    <>
      {showAlert && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(225, 29, 72, 0.95)',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontFamily: "'Fira Code', monospace",
          animation: 'glitch-flash 0.1s infinite',
          pointerEvents: 'none'
        }}>
          <svg width="160" height="160" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '2rem' }}>
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', margin: 0, letterSpacing: '0.2em', textAlign: 'center' }}>SYSTEM BREACH</h1>
          <p style={{ fontSize: 'clamp(1rem, 3vw, 2rem)', marginTop: '1rem', opacity: 0.9 }}>CRITICAL SECURITY ALERT: DEFCON 1 ACTIVE</p>
          <style>
            {`
              @keyframes glitch-flash {
                0% { opacity: 1; transform: translate(0); filter: hue-rotate(0deg); }
                20% { opacity: 0.9; transform: translate(-3px, 3px); }
                40% { opacity: 1; transform: translate(-3px, -3px); filter: hue-rotate(90deg); }
                60% { opacity: 0.8; transform: translate(3px, 3px); }
                80% { opacity: 1; transform: translate(3px, -3px); filter: hue-rotate(-90deg); }
                100% { opacity: 1; transform: translate(0); }
              }
            `}
          </style>
        </div>
      )}

      <button 
        onClick={toggleDefcon}
        style={{
          position: 'fixed',
          bottom: '60px',
          right: '20px',
          backgroundColor: defconLevel === 1 ? '#ffffff' : 'transparent',
          color: defconLevel === 1 ? '#e11d48' : '#e11d48',
          border: '1px solid #e11d48',
          padding: '0.5rem 1rem',
          fontFamily: "'Fira Code', monospace",
          fontSize: '0.75rem',
          cursor: 'crosshair',
          zIndex: 9997,
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
          boxShadow: defconLevel === 1 ? '0 0 15px rgba(225, 29, 72, 0.5)' : 'none'
        }}
        onMouseOver={(e) => {
          if (defconLevel === 5) {
            e.currentTarget.style.backgroundColor = 'rgba(225, 29, 72, 0.1)';
          }
        }}
        onMouseOut={(e) => {
          if (defconLevel === 5) {
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        }}
        aria-label="Toggle DEFCON alert mode"
      >
        [ DEFCON {defconLevel} ]
      </button>
    </>
  );
}
