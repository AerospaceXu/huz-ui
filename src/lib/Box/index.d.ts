import React from "react";
import "./styles/index.scss";
interface Props {
    mode?: "vertical" | "horizontal";
    width?: number;
    height?: number;
}
declare const Box: React.FC<Props>;
export default Box;
