import React from "react";
declare const useButton: () => {
    buttonRef: React.RefObject<HTMLButtonElement>;
    buttonSize: {
        width: number;
        height: number;
    };
    buttonPlace: DOMRect | null;
    computeClickPlace: (clickEvent: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        top: number;
        left: number;
    } | undefined;
};
export default useButton;
