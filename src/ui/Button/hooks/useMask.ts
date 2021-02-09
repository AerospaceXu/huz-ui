import { useCallback, useEffect, useState } from "react";

const useMask = (animateTime: number) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isBreak, setIsBreak] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(0);

  const toggleActive = useCallback(() => {
    if (isActive) {
      clearTimeout(timer);
      setIsBreak(true);
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }, [isActive, timer]);

  useEffect(() => {
    if (isActive) {
      setTimer(setTimeout(() => setIsActive(false), animateTime));
    } else if (isBreak) {
      setIsActive(true);
      setIsBreak(false);
    }
  }, [animateTime, isActive, isBreak]);

  return {
    handleMaskAnimation: toggleActive,
    maskVisible: isActive,
  };
};

export default useMask;
