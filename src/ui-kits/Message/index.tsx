import React from "react";
import "./styles/index.scss";

import successIcon from "../../assets/success-icon.svg";
import errorIcon from "../../assets/error-icon.svg";

const iconHash = {
  success: successIcon,
  error: errorIcon,
};

interface Props {
  messageType: "success" | "error";
  text: string;
}

const Message: React.FC<Props> = (props) => {
  const { messageType, text } = props;
  return (
    <div className="huz-message">
      <span>
        <img src={iconHash[messageType]} alt="" />
      </span>
      <p>{text}</p>
    </div>
  );
};

export default Message;
