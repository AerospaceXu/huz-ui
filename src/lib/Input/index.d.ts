import React from "react";
import "./style/index.scss";
interface Props {
    label: string;
    value: string;
    inputWidth?: number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
declare const Input: React.FC<Props>;
export default Input;
