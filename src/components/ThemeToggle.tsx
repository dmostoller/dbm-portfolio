'use client';

import { useCallback } from 'react';
import useSound from 'use-sound';

export const useTheme = () => {
  const [playClick] = useSound('/sounds/click.mp3', { volume: 0.5 });

  const setTheme = useCallback((theme: string) => {
    document.documentElement.setAttribute('data-theme', theme);
    playClick();
  }, [playClick]);

  return { setTheme };
};
