import { FC } from 'react';

interface ErrorProps {
  message?: string;
  code?: string | number;
}

const Error: FC<ErrorProps> = ({ 
  message = 'An error occurred', 
  code = 'ERR' 
}) => {
  return (
    <div className="min-h-96 flex items-center justify-center bg-terminal-color p-4">
      <div className="text-center">
        <div className="ascii-border mb-4">
          ╔══════════════════════════════╗
          ║        SYSTEM ERROR          ║
          ╚══════════════════════════════╝
        </div>
        <div className="text-terminal-red font-dos mb-4">
          Error Code: {code}
        </div>
        <div className="text-[var(--terminal-color)] text-xl font-dos">
          {message}
        </div>
      </div>
    </div>
  );
};

export default Error;