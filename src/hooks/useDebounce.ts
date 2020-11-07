const useDebounce = (fn: any, gap: number) => {
  let timer: number | null = null;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn();
      timer = null;
    }, gap);
  };
};

export default useDebounce;
