import React from "react";
import "./styles/index.scss";
interface Props {
    messageType: "success" | "error";
    text: string;
}
declare const Message: React.FC<Props>;
export default Message;
