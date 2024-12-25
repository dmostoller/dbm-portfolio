import { FC } from 'react';
interface LoadingProps {
  message?: string;
}

const Loading: FC<LoadingProps> = ({ message = 'Loading...' }) => {
  return (
    <div className="min-h-96 flex items-center justify-center bg-terminal-color p-4">
      <div className="text-center">
        <div className="text-[var(--terminal-color)] text-xl font-dos animate-pulse">
          {message}
        </div>
      </div>
    </div>
  );
};

export default Loading;