import { useEffect, useState } from 'react';
import useSound from 'use-sound';

const FRAMES = [
`
     /\\       
    /  \\      
   /====\\     
   |    |     
   |NASA|     
   |    |     
  /|_/\\_|\\    
 //|[  ]|\\\\   
|||  ||  |||  
   [ T-3 ]    `,
`
     /\\       
    /  \\      
   /====\\     
   |    |     
   |NASA|     
   |    |     
  /|_/\\_|\\    
 //|[  ]|\\\\   
|||  ||  |||  
   [ T-2 ]    
    ~~~~~     `,
`
     /\\       
    /  \\      
   /====\\     
   |    |     
   |NASA|     
   |    |     
  /|_/\\_|\\    
 //|[  ]|\\\\   
|||  ||  |||  
   [ T-1 ]    
   ~~~~~~~    
  ~~~~~~~~~   `,
`
     /\\       
    /  \\      
   /====\\     
   |    |     
   |NASA|     
   |    |     
  /|_/\\_|\\    
 //|[  ]|\\\\   
|||  ||  |||  
 [BLASTOFF!]  
   {####}     
  {######}    
 {########}   `,
 ``
];

const PARTICLE_COUNT = 50;

const RocketAnimation = () => {
  const [frameIndex, setFrameIndex] = useState(0);
  const [particles, setParticles] = useState<Array<{x: number, y: number, speed: number}>>([]);
  const [playBeep] = useSound('/sounds/beep.mp3', { volume: 0.5 });
  const [playLaunch] = useSound('/sounds/launch.mp3', { volume: 0.5 });

  useEffect(() => {
    if (frameIndex >= FRAMES.length) return;

    if (frameIndex === FRAMES.length - 2) {
      playLaunch();
      // Initialize particles
      setParticles(Array.from({length: PARTICLE_COUNT}, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: 0.5 + Math.random() * 2
      })));
    } else if (frameIndex < FRAMES.length - 2) {
      playBeep();
    }

    const timer = setInterval(() => {
      setFrameIndex(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [frameIndex, playBeep, playLaunch]);

  return (
    <div className="flex justify-center items-center min-h-[400px] perspective-1000">
      <pre className={`
        absolute font-mono text-lg
        transition-all duration-1000
        ${frameIndex === FRAMES.length - 3 ? 'text-blue-500' : 'text-green-500'}
        ${frameIndex === FRAMES.length - 2 ? 'animate-ascend' : ''}
      `}>
        {FRAMES[frameIndex] || FRAMES[FRAMES.length]}
      </pre>
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-yellow-500 rounded-full animate-particle"
          style={{
            left: `${p.x}%`,
            bottom: `${p.y}%`,
            animationDuration: `${p.speed}s`
          }}
        />
      ))}
    </div>
  );
};

export default RocketAnimation;