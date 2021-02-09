import React from "react";
import "./styles/button-mask-style.scss";
import { MaskPosition } from "./interfaces/mask-position";
interface Props {
    buttonSize: {
        width: number;
        height: number;
    };
    clickPosition: MaskPosition | null;
    animateTime: number;
}
declare const ButtonMask: React.FC<Props>;
export default ButtonMask;
