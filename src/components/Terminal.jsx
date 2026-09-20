import React, { useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';

const projectData = [
  { id: 'crack-analysis', title: 'Crack Analysis & Detection' },
  { id: 'deception-platform', title: 'Cyber Deception Platform' },
  { id: 'math-adaptive-reasoning', title: 'Math Adaptive Reasoning' },
  { id: 'nexcode', title: 'NexCode IDE' },
  { id: 'vaptaas', title: 'VAPTaaS - Vulnerability Assessment' }
];

const fuse = new Fuse(projectData, {
  keys: ['title', 'id'],
  threshold: 0.4
});

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([
    "INITIALIZING SECURE TERMINAL...",
    "TYPE 'help' FOR AVAILABLE COMMANDS."
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const audioCtxRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
    }
  }, [isOpen]);

  const playKeystroke = () => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') ctx.resume();

    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(150 + Math.random() * 50, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.05);

    gainNode.gain.setValueAtTime(0.05, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  };

  const handleCommand = (e) => {
    if (e.key !== '`' && e.key !== '~') {
      playKeystroke();
    }

    if (e.key === 'Enter') {
      const fullCmd = input.trim().toLowerCase();
      const newHistory = [...history, `> ${input}`];
      
      const args = fullCmd.split(' ');
      const cmd = args[0];

      if (cmd === 'help') {
        newHistory.push("AVAILABLE COMMANDS:");
        newHistory.push("  whoami   - View system identity");
        newHistory.push("  ls       - List deployed projects");
        newHistory.push("  cd <dir> - Navigate to directory");
        newHistory.push("  search <q>- Semantic fuzzy search");
        newHistory.push("  contact  - Initiate secure channel");
        newHistory.push("  clear    - Clear terminal buffer");
        newHistory.push("  exit     - Close secure terminal");
      } else if (cmd === 'whoami') {
        newHistory.push("IDENTITY: KARTHIK KUMAR");
        newHistory.push("ROLE: SOFTWARE ENGINEER | AI & SECURITY");
        newHistory.push("STATUS: ACTIVE");
      } else if (cmd === 'contact') {
        newHistory.push("INITIATING COMMS: karthikyt369@gmail.com");
        window.location.href = 'mailto:karthikyt369@gmail.com';
      } else if (cmd === 'ls') {
        newHistory.push("drwxr-xr-x  crack-analysis");
        newHistory.push("drwxr-xr-x  deception-platform");
        newHistory.push("drwxr-xr-x  math-adaptive-reasoning");
        newHistory.push("drwxr-xr-x  nexcode");
        newHistory.push("drwxr-xr-x  vaptaas");
      } else if (cmd === 'cd') {
        const target = args[1];
        if (!target) {
          newHistory.push("cd: missing operand");
        } else if (target === '..') {
          newHistory.push("NAVIGATING TO ROOT...");
          window.location.href = '/';
        } else if (['crack-analysis', 'deception-platform', 'math-adaptive-reasoning', 'nexcode', 'vaptaas'].includes(target)) {
          newHistory.push(`NAVIGATING TO /work/${target}...`);
          window.location.href = `/work/${target}`;
        } else {
          newHistory.push(`cd: ${target}: No such file or directory`);
        }
      } else if (cmd === 'search') {
        const query = args.slice(1).join(' ');
        if (!query) {
          newHistory.push("search: missing query string");
        } else {
          const results = fuse.search(query);
          if (results.length === 0) {
            newHistory.push("0 MATCHES FOUND.");
          } else {
            newHistory.push(`FOUND ${results.length} MATCHES:`);
            results.forEach(res => {
              newHistory.push(`  - ${res.item.id} (${res.item.title})`);
            });
          }
        }
      } else if (cmd === 'set' && args[1] === 'defcon') {
        const level = parseInt(args[2]);
        if (level === 1) {
          document.documentElement.style.setProperty('--color-bg', '#3b0000');
          document.documentElement.style.setProperty('--color-ice-blue', '#ffffff');
          newHistory.push("WARNING: DEFCON 1 ACTIVE. SYSTEM UNDER ATTACK.");
          window.dispatchEvent(new CustomEvent('defcon-change', { detail: { level: 1 } }));
        } else if (level === 5) {
          document.documentElement.style.setProperty('--color-bg', '#050505');
          document.documentElement.style.setProperty('--color-ice-blue', '#38bdf8');
          newHistory.push("DEFCON 5 SECURE. NORMAL OPERATIONS RESTORED.");
          window.dispatchEvent(new CustomEvent('defcon-change', { detail: { level: 5 } }));
        } else {
          newHistory.push("INVALID DEFCON LEVEL. USE 1 OR 5.");
        }
      } else if (cmd === 'clear') {
        setHistory([]);
        setInput('');
        return;
      } else if (cmd === 'exit') {
        setIsOpen(false);
      } else if (cmd !== '') {
        newHistory.push(`COMMAND NOT FOUND: ${cmd}`);
      }

      setHistory(newHistory);
      setInput('');
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '50vh',
      backgroundColor: 'rgba(5, 5, 5, 0.95)',
      borderBottom: '1px solid #38bdf8',
      zIndex: 9999,
      fontFamily: "'Fira Code', monospace",
      color: '#38bdf8',
      padding: '2rem',
      boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
      display: 'flex',
      flexDirection: 'column',
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
        <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>SECURE_SHELL_v1.0.6</span>
        <button onClick={() => setIsOpen(false)} style={{ color: '#e11d48', cursor: 'pointer' }}>[CLOSE_CONNECTION]</button>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.875rem' }}>
        {history.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
          <span style={{ color: '#e11d48', marginRight: '0.5rem' }}>root@karthik:~#</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#f8fafc',
              fontFamily: "'Fira Code', monospace",
              fontSize: '0.875rem',
              outline: 'none',
              flex: 1
            }}
            spellCheck="false"
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}
