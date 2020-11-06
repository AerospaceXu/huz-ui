import { useCallback, useEffect, useState } from 'react';

export const useMask = (animateTime: number) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const toggleActive = useCallback(() => {
    setIsActive(true);
  }, []);
  useEffect(() => {
    if (isActive) {
      setTimeout(() => setIsActive(false), animateTime);
    }
  }, [animateTime, isActive]);

  return {
    handleMaskAnimation: toggleActive,
    maskVisible: isActive,
  };
};
