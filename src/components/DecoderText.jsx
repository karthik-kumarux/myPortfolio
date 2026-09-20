import React, { useState, useEffect } from 'react';

const CHARS = '!<>-_\\/[]{}—=+*^?#_';

export default function DecoderText({ text, delay = 0, className = '', loopInterval = 0 }) {
  const [displayText, setDisplayText] = useState('');
  const [isDecoding, setIsDecoding] = useState(false);

  useEffect(() => {
    let timeout;
    let interval;
    let loopTimeout;
    
    const startDecoding = () => {
      setIsDecoding(true);
      let iteration = 0;
      
      interval = setInterval(() => {
        setDisplayText(
          text.split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (index < iteration) {
                return text[index];
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join('')
        );
        
        if (iteration >= text.length) {
          clearInterval(interval);
          setIsDecoding(false);
          setDisplayText(text);
          
          if (loopInterval) {
            loopTimeout = setTimeout(startDecoding, loopInterval);
          }
        }
        
        iteration += 1 / 3;
      }, 30);
    };

    timeout = setTimeout(startDecoding, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
      clearTimeout(loopTimeout);
    };
  }, [text, delay, loopInterval]);

  if (!isDecoding && displayText === '') {
    // Initial hidden state before delay
    return <span className={className} style={{ opacity: 0 }}>{text}</span>;
  }
  
  return <span className={className}>{displayText}</span>;
}
