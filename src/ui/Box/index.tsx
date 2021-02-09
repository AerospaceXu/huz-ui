import React from "react";
import "./styles/index.scss";

interface Props {
  mode?: "vertical" | "horizontal";
}

const Box: React.FC<Props> = (props) => {
  const { mode, children } = props;

  const className = `huz-box huz-box-${mode ?? "vertical"}`;

  return <div className={className}>{children}</div>;
};

export default Box;
