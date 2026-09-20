import React from 'react';

const tickerItems = [
  "[SYS_ID: KARTHIK_KUMAR]",
  "NODE_01: ONLINE",
  "NETWORK_TRAFFIC: ENCRYPTED",
  "NEURAL_NET: IDLE",
  "VULNERABILITY_SCAN: PASSED",
  "UPTIME: 99.998%",
  "LATENCY: 14ms",
  "[PROTOCOL: SECURE]",
  "ANOMALY_DETECTION: NEGATIVE",
  "MEMORY_ALLOC: STABLE",
  "AUTHORIZATION: GRANTED"
];

export default function DataTicker() {
  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '30px',
      backgroundColor: 'rgba(5, 5, 5, 0.95)',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      zIndex: 9998,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      fontFamily: "'Fira Code', monospace",
      fontSize: '0.75rem',
      color: '#94a3b8',
      backdropFilter: 'blur(10px)'
    }}>
      <div className="ticker-scroll">
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
          <span key={i} style={{ 
            padding: '0 2rem', 
            borderRight: '1px solid rgba(255, 255, 255, 0.08)',
            whiteSpace: 'nowrap'
          }}>
            {item}
          </span>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .ticker-scroll {
          display: flex;
          animation: ticker 40s linear infinite;
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}} />
    </div>
  );
}
