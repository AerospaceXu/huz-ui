import React, { MouseEventHandler } from "react";
import "./styles/index.scss";
import { ButtonType } from "./interfaces/button-type";
interface Props {
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: ButtonType;
    isContained?: boolean;
    disable?: boolean;
}
declare const Button: React.FC<Props>;
export default Button;
