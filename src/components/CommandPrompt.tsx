'use client';
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from './ThemeToggle';

interface CommandPromptProps {
  onCommand: (command: string) => void;
}

function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    const resizeHandler = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeHandler);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-50 bg-black"
      style={{ touchAction: 'none' }}
    />
  );
}

type ExternalLinks = {
  github: string;
  linkedin: string;
  medium: string;
  bluesky: string;
};

type ValidLinkKeys = keyof ExternalLinks;

const HELP_TEXT = 
'Available commands:\n\n' +
'    dir              - List projects\n' +
'    cd [path]        - Navigate to page (about, blog, projects)\n' +
'    help             - Show this help\n' +
'    clear            - Clear screen\n' +
'    open [link]      - Open external link (github, linkedin, medium)\n' +
'    download resume  - Download resume PDF\n' +
'    theme [default|green|amber|blue] - Change terminal theme\n' +
'    matrix           - Activate Matrix rain\n\n' +
// '    exit             - Return to home\n\n' +
'Examples:\n\n' +
'    cd about         - Go to about page\n' +
'    open github      - Open GitHub profile\n' +
'    dir              - Show projects\n' +
'    download resume  - Get PDF version\n' +
'    theme amber      - Change terminal theme to amber\n';


const VALID_PATHS = ['about', 'blog', 'projects'];
const VALID_LINKS: ExternalLinks = {
  github: 'https://github.com/dmostoller',
  linkedin: 'https://linkedin.com/in/davidmostoller',
  medium: 'https://medium.com/@dmostoller',
  bluesky: 'https://bsky.app/profile/davemostoller.bsky.social'
};

const EASTER_EGGS = {
  matrix: {
    command: 'matrix',
    response: () => 'Initiating Matrix sequence...'
  },
  sudo: {
    command: 'sudo',
    response: '🚫 Access denied! (Try asking nicely with "please")'
  },
  'please sudo': {
    command: 'please sudo',
    response: '😊 Granted! You have unlimited power... (not really)'
  },
  coffee: {
    command: 'coffee',
    response: '☕ Here\'s your virtual coffee break!\nBeep boop... brewing...'
  },
  party: {
    command: 'party',
    response: '🎉 🎈 🎊 PARTY TIME! 🎵 💃 🕺'
  }
};

export default function CommandPrompt({ onCommand }: CommandPromptProps) {
  const { setTheme } = useTheme();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [showMatrix, setShowMatrix] = useState(false);

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    setHistory(prev => [...prev, cmd]);

  if (command === 'matrix') {
    setShowMatrix(true);
    setTimeout(() => setShowMatrix(false), 5000);
    onCommand(EASTER_EGGS.matrix.response());
    setInput('');
    setHistoryIndex(-1);
    return;
  }

  if (command.startsWith('theme ')) {
    const theme = command.split(' ')[1];
    if (['default', 'green', 'amber', 'blue'].includes(theme)) {
      setTheme(theme);
      onCommand(`Theme changed to ${theme}`);
    } else {
      onCommand('Available themes: default, green, amber, blue');
    }
    setInput('');
    setHistoryIndex(-1);
    return;
  }

  const easterEgg = EASTER_EGGS[command as keyof typeof EASTER_EGGS];
  if (easterEgg) {
    if (typeof easterEgg.response === 'function') {
      onCommand(easterEgg.response());
    } else {
      onCommand(easterEgg.response);
    }
    setInput('');
    setHistoryIndex(-1);
    return;
  }
        
    if (command === 'download resume') {
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      onCommand('Downloading resume...');
    } else if (command === 'help') {
      onCommand(HELP_TEXT);
    } else if (command.startsWith('cd ')) {
      const path = command.split(' ')[1];
      if (VALID_PATHS.includes(path)) {
        router.push(`/${path}`);
      } else {
        onCommand(`Invalid path: ${path}`);
      }
    } else if (command.startsWith('open ')) {
      const link = command.split(' ')[1] as ValidLinkKeys;
      if (link in VALID_LINKS) {
        window.open(VALID_LINKS[link], '_blank');
        onCommand(`Opening ${link}...`);
      } else {
        onCommand(`Invalid link: ${link}`);
      }
    } else if (command === 'exit') {
      router.push('/');
    } else {
      onCommand(command);
    }
    
    setInput('');
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input.trim()) {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        setHistoryIndex(prev => prev + 1);
        setInput(history[history.length - 1 - historyIndex - 1]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        setHistoryIndex(prev => prev - 1);
        setInput(history[history.length - 1 - historyIndex + 1]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
    {showMatrix && <MatrixRain />}
    <div className="flex items-center font-dos relative">
      <span>C:\&gt;</span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="bg-transparent border-none outline-none pl-0 ml-0 font-dos w-full"
        autoFocus
      />
      <span 
        className="animate-pulse absolute"
        style={{ 
          left: `${(input.length * 0.61) + 2.5}rem`,
          transition: 'left 0.05s'
        }}
      >
        _
      </span>
    </div>
  </>
  );
}