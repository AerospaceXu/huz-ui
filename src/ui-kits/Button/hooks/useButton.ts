import React, {
  useState, useRef, useEffect, useCallback,
} from 'react';

const useButton = () => {
  const button = useRef<HTMLButtonElement>(null);
  const [buttonPlace, setButtonPlace] = useState<DOMRect | null>(null);

  const [buttonSize, setButtonSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setButtonSize({
      width: button.current?.clientWidth || 0,
      height: button.current?.clientHeight || 0,
    });
    setButtonPlace(button.current?.getBoundingClientRect() || null);
  }, [button]);

  const computeClickPlace = useCallback(
    (clickEvent: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      let left: number;
      let top: number;
      if (buttonPlace) {
        left = clickEvent.pageX - buttonPlace.left;
        top = clickEvent.pageY - buttonPlace.top;
        return {
          top,
          left,
        };
      }
      return undefined;
    },
    [buttonPlace],
  );

  return {
    buttonRef: button,
    buttonSize,
    buttonPlace,
    computeClickPlace,
  };
};

export default useButton;
