import { useState, useRef, useEffect } from "react";

const useInput = () => {
  const [inputSize, setInputSize] = useState<{
    height: number;
    width: number;
  }>({ width: 0, height: 0 });
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!input.current) {
      return;
    }
    setInputSize({
      width: input.current.clientWidth,
      height: input.current.clientHeight,
    });
  }, []);

  return {
    input,
    inputSize,
  };
};

export default useInput;
