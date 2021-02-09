/// <reference types="react" />
declare const useInput: () => {
    input: import("react").RefObject<HTMLInputElement>;
    inputSize: {
        height: number;
        width: number;
    };
};
export default useInput;
