import React from "react";
import "./styles/index.scss";

interface Props {
  mode?: "vertical" | "horizontal";
  width?: number;
  height?: number;
}

const Box: React.FC<Props> = (props) => {
  const {
    mode, width, height, children,
  } = props;

  const className = `huz-box huz-box-${mode ?? "horizontal"}`;

  return (
    <div
      className={className}
      style={{ width: width ?? "auto", height: height ?? "auto" }}
    >
      {children}
    </div>
  );
};

export default Box;
