import { useEffect, useState } from "react";
import useSound from "use-sound";

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
  ``,
];

const RocketAnimation = () => {
  const [frameIndex, setFrameIndex] = useState(0);
  const [playBeep] = useSound("/sounds/beep.mp3", { volume: 0.1 });
  const [playLaunch] = useSound("/sounds/launch.mp3", { volume: 0.1 });

  useEffect(() => {
    if (frameIndex >= FRAMES.length) return;

    if (frameIndex === FRAMES.length - 2) {
      playLaunch();
    } else if (frameIndex < FRAMES.length - 2) {
      playBeep();
    }

    const timer = setInterval(() => {
      setFrameIndex((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [frameIndex, playBeep, playLaunch]);

  return (
    <div className="flex justify-center items-center min-h-[400px] perspective-1000">
      <pre
        className={`
        absolute font-mono text-lg
        transition-all duration-1000
        ${frameIndex === FRAMES.length - 2 ? "animate-ascend" : ""}
      `}
      >
        {FRAMES[frameIndex] || FRAMES[FRAMES.length]}
      </pre>
    </div>
  );
};

export default RocketAnimation;
